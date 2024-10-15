"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import { Appointment } from "@/types/appwrite.types";

import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
  messaging,
} from "../appwrite.config";
import { formatDateTime, parseStringify } from "../utils";

//  CREATE APPOINTMENT
export const createAppointment = async (appointment: CreateAppointmentParams) => {
  if (!DATABASE_ID || !APPOINTMENT_COLLECTION_ID) {
    throw new Error("Missing database configuration");
  }

  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID,
      APPOINTMENT_COLLECTION_ID,
      ID.unique(),
      appointment
    );

    revalidatePath("/admin");
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
    throw error; // Rethrow to handle upstream
  }
};

//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
  if (!DATABASE_ID || !APPOINTMENT_COLLECTION_ID) {
    throw new Error("Missing database configuration");
  }

  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID,
      APPOINTMENT_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce((acc, appointment) => {
      switch (appointment.status) {
        case "scheduled":
          acc.scheduledCount++;
          break;
        case "pending":
          acc.pendingCount++;
          break;
        case "cancelled":
          acc.cancelledCount++;
          break;
      }
      return acc;
    }, initialCounts);

    const data = {
      totalCount: appointments.total,
      ...counts,
      documents: appointments.documents,
    };

    return parseStringify(data);
  } catch (error) {
    console.error("An error occurred while retrieving the recent appointments:", error);
    throw error; // Rethrow to handle upstream
  }
};

//  SEND SMS NOTIFICATION
export const sendSMSNotification = async (userId: string, content: string) => {
  try {
    const message = await messaging.createSms(
      ID.unique(),
      content,
      [],
      [userId]
    );
    return parseStringify(message);
  } catch (error) {
    console.error("An error occurred while sending SMS:", error);
    throw error; // Rethrow to handle upstream
  }
};

//  UPDATE APPOINTMENT
export const updateAppointment = async ({
  appointmentId,
  userId,
  timeZone,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  if (!DATABASE_ID || !APPOINTMENT_COLLECTION_ID) {
    throw new Error("Missing database configuration");
  }

  try {
    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID,
      APPOINTMENT_COLLECTION_ID,
      appointmentId,
      appointment
    );

    if (!updatedAppointment) throw new Error("Update failed");

    const smsMessage = constructSmsMessage(appointment, type, timeZone);
    await sendSMSNotification(userId, smsMessage);

    revalidatePath("/admin");
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("An error occurred while scheduling an appointment:", error);
    throw error; // Rethrow to handle upstream
  }
};

// Construct SMS message based on appointment details
const constructSmsMessage = (appointment: Appointment, type: string, timeZone: string) => {
  const dateTime = formatDateTime(appointment.schedule!, timeZone).dateTime;
  return `Greetings from CareConnect. ${
    type === "schedule" 
      ? `Your appointment is confirmed for ${dateTime} with Dr. ${appointment.primaryPhysician}` 
      : `We regret to inform you that your appointment for ${dateTime} is cancelled. Reason: ${appointment.cancellationReason}`
  }`;
};

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  if (!DATABASE_ID || !APPOINTMENT_COLLECTION_ID) {
    throw new Error("Missing database configuration");
  }

  try {
    const appointment = await databases.getDocument(
      DATABASE_ID,
      APPOINTMENT_COLLECTION_ID,
      appointmentId
    );

    return parseStringify(appointment);
  } catch (error) {
    console.error("An error occurred while retrieving the existing appointment:", error);
    throw error; // Rethrow to handle upstream
  }
};

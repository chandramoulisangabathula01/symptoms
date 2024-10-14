/* eslint-disable tailwindcss/no-custom-classname */
// import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import Navbar from "@/components/Navbar";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <>
      <Navbar />
      <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
        {/* <Image
            src="/assets/icons/logo-full.png"
            height={128}
            width={128}
            alt="patient"
            className="h-42 w-42 mb-12"
          /> */}

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 CareConnect</p>
        </div>
      </section>

      {/* <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
        /> */}
      </div>
    </>
  );
};

export default Appointment;

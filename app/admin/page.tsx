/* eslint-disable react/jsx-no-undef */

// "use server"

// import Navbar from "@/components/Navbar";
// import { StatCard } from "@/components/StatCard";
// import { columns } from "@/components/table/columns";
// import { DataTable } from "@/components/table/DataTable";
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
// import { APPOINTMENT_COLLECTION_ID,DATABASE_ID  } from "@/lib/appwrite.config";


// const AdminPage = async () => {
//   try {
//     const appointments = await getRecentAppointmentList();

//     const scheduledCount = appointments?.scheduledCount || 0;
//     const pendingCount = appointments?.pendingCount || 0;
//     const cancelledCount = appointments?.cancelledCount || 0;
//     const documents = appointments?.documents || [];

//     console.log("DATABASE_ID:", DATABASE_ID);
// console.log("APPOINTMENT_COLLECTION_ID:", APPOINTMENT_COLLECTION_ID);
//     return (
//       <>
//         <Navbar />
//         <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//           <main className="admin-main">
//             <section className="w-full space-y-4">
//               <h1 className="header mt-10 text-white">Welcome 👋</h1>
//               <p className="text-white">Start the day with managing new appointments</p>
//             </section>

//             <section className="admin-stat">
//               <StatCard
//                 type="appointments"
//                 count={scheduledCount}
//                 label="Scheduled appointments"
//                 icon={"/assets/icons/appointments.svg"}
//               />
//               <StatCard
//                 type="pending"
//                 count={pendingCount}
//                 label="Pending appointments"
//                 icon={"/assets/icons/pending.svg"}
//               />
//               <StatCard
//                 type="cancelled"
//                 count={cancelledCount}
//                 label="Cancelled appointments"
//                 icon={"/assets/icons/cancelled.svg"}
//               />
//             </section>

//             <DataTable columns={columns} data={documents} />
//           </main>
//         </div>
        
//       </>
//     );
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//     return (
//       <>
//         <Navbar />
//         <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//           <main className="admin-main">
//             <h1 className="header mt-10 text-white">Error Loading Appointments</h1>
//             <p className="text-white">There was an error retrieving appointments. Please try again later.</p>
//           </main>
//         </div>
        
//       </>
//     );
//   }
// };



// export default AdminPage;



import Navbar from "@/components/Navbar";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  let scheduledCount = 0;
  let pendingCount = 0;
  let cancelledCount = 0;
  let documents = [];

  try {
    const appointments = await getRecentAppointmentList();

    // Using optional chaining to prevent TypeErrors
    if (appointments) {
      scheduledCount = appointments.scheduledCount || 0;
      pendingCount = appointments.pendingCount || 0;
      cancelledCount = appointments.cancelledCount || 0;
      documents = appointments.documents || [];
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <main className="admin-main">
          <section className="w-full space-y-4">
            <h1 className="header mt-10 text-white">Welcome 👋</h1>
            <p className="text-white">Start the day with managing new appointments</p>
          </section>

          <section className="admin-stat">
            <StatCard
              type="appointments"
              count={scheduledCount}
              label="Scheduled appointments"
              icon={"/assets/icons/appointments.svg"}
            />
            <StatCard
              type="pending"
              count={pendingCount}
              label="Pending appointments"
              icon={"/assets/icons/pending.svg"}
            />
            <StatCard
              type="cancelled"
              count={cancelledCount}
              label="Cancelled appointments"
              icon={"/assets/icons/cancelled.svg"}
            />
          </section>

          <DataTable columns={columns} data={documents} />
        </main>
      </div>
    </>
  );
};


export default AdminPage;
// const AdminPage = async () => {
//   try {
//     const appointments = await getRecentAppointmentList();

//     // If appointments is undefined or empty, provide default values
//     const scheduledCount = appointments?.scheduledCount || 0;
//     const pendingCount = appointments?.pendingCount || 0;
//     const cancelledCount = appointments?.cancelledCount || 0;
//     const documents = appointments?.documents || [];

//     return (
//       <>
//         <Navbar />
//         <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//           <main className="admin-main ">
//             <section className="w-full space-y-4">
//               <h1 className="header mt-10 text-white">Welcome 👋</h1>
//               <p className="text-white">
//                 Start the day with managing new appointments
//               </p>
//             </section>

//             <section className="admin-stat">
//               <StatCard
//                 type="appointments"
//                 count={scheduledCount}
//                 label="Scheduled appointments"
//                 icon={"/assets/icons/appointments.svg"}
//               />
//               <StatCard
//                 type="pending"
//                 count={pendingCount}
//                 label="Pending appointments"
//                 icon={"/assets/icons/pending.svg"}
//               />
//               <StatCard
//                 type="cancelled"
//                 count={cancelledCount}
//                 label="Cancelled appointments"
//                 icon={"/assets/icons/cancelled.svg"}
//               />
//             </section>

//             <DataTable columns={columns} data={documents} />
//           </main>
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//     return (
//       <>
//         <Navbar />
//         <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//           <main className="admin-main">
//             <h1 className="header mt-10 text-white">Error Loading Appointments</h1>
//             <p className="text-white">There was an error retrieving appointments. Please try again later.</p>
//           </main>
//         </div>
//       </>
//     );
//   }
// };
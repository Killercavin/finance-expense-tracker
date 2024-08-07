import { UserButton, SignedIn } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form";

const Dashboard = () =>{
    return (
        <div className="dashboard-container">
            <h5>
                
            <SignedIn>
                <UserButton />
            </SignedIn>
            </h5>
            <FinancialRecordForm />
        </div>
    );
};

export default Dashboard;
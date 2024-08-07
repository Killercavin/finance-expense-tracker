import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const FinancialRecordForm = () => {

    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('');

    const { user } = useUser();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecord = {
            userId: user?.id,
            date: new Date().toISOString(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            paymentMethod: paymentMethod,
        };

        addRecord(newRecord);

        setDescription('');
        setAmount('');
        setCategory('');
        setPaymentMethod('');
    }

    return (
        <div className="form-container">
            <form action="" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="description">Description</label>
                    <input type="text" placeholder="Description" className="input" required value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" placeholder="Amount" className="input" required value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" className="input" required value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Select A Category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select name="paymentMethod" id="paymentMethod" className="input" required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="">Select Payment Method</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Mobile Money">Mobile Money</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button className="button" type="submit">Add Record</button>
            </form>
        </div>
    );
}

export default FinancialRecordForm;
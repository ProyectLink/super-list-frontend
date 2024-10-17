import { useNavigate } from "react-router-dom";


const OptionButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 items-center mt-8">
      <button type="button" className="text-gray-500 border rounded-full border-gray-300 py-1 px-3 hover:text-gray-900 hover:bg-gray-300 focus:text-gray-900 focus:bg-gray-300" onClick={()=> navigate("profile")}>Profile</button>
      <button type="button" className="text-gray-500 border rounded-full border-gray-300 py-1 px-3 hover:text-gray-900 hover:bg-gray-300 focus:text-gray-900 focus:bg-gray-300" onClick={()=> navigate("features")}>Features</button>
      <button type="button" className="text-gray-500 border rounded-full border-gray-300 py-1 px-3 hover:text-gray-900 hover:bg-gray-300 focus:text-gray-900 focus:bg-gray-300" onClick={()=> navigate("subscriptions")}>Subscriptions</button>
      <button type="button" className="text-gray-500 border rounded-full border-gray-300 py-1 px-3 hover:text-gray-900 hover:bg-gray-300 focus:text-gray-900 focus:bg-gray-300" onClick={()=> navigate("integrations")}>Integrations</button>
    </div>
  )
} 

export default OptionButtons;
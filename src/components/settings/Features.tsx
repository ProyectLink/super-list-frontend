import { useState } from "react"


const Features = () => {
    const [themeSelector, setThemeSelector] = useState<string>('light-theme')
  return (
    <div className="flex flex-col gap-4">
        <div className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Personal info</p>
              <p className="text-gray-500">
                Update your photo and personal details here
              </p>
            </div>
          </div>

          <div className='flex justify-between items-center'>
          <p className="text-gray-700 font-[500]">Active theme</p>
          <select name="theme-selector" value={themeSelector} className="bg-gray-200 px-3 py-2 rounded-full flex-1 border border-gray-300 max-w-xs focus:outline-none" onChange={(e) => setThemeSelector(e.target.value)}>
            <option value="light-theme">Light theme</option>
            <option value="dark-theme">Dark theme</option>
          </select>
          </div>

        </div>

        <div className="bg-gray-100 rounded-2xl p-6 flex">
          <div className="flex justify-between w-full items-center">
            <div>
              <p className="font-bold">Recently viewed lists</p>
              <p className="text-gray-500">
                See your most recently viewed lists in a dedicated section in the sidebar
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer"/>
                <div className="w-[2.3rem] h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full"></div>
            </label>
            
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 flex">
        <div className="flex justify-between w-full items-center">
            <div>
              <p className="font-bold">Sounds</p>
              <p className="text-gray-500">
                Enable sound effects
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer"/>
                <div className="w-[2.3rem] h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full"></div>
            </label>
            
          </div>
        </div>


      </div>
  )
}

export default Features
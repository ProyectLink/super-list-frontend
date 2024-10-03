const Profile = () => {
    return (
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Personal info</p>
                <p className="text-gray-500">
                  Update your photo and personal details here
                </p>
              </div>
              <div>
                <img
                  src="/subsets/universe.jpg"
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>
  
            <form className="flex gap-3 flex-col">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <label htmlFor="first-name" className="text-gray-700 font-[500]">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First name"
                    className="bg-gray-200 px-3 py-2 rounded-full flex-1 border border-gray-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="last-name" className="text-gray-700 font-[500]">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last name"
                    className="bg-gray-200 px-3 py-2 rounded-full flex-1 border border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
  
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="email" className="text-gray-700 font-[500]">
                  Primary email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abcdefgh@gmail.com"
                  className="bg-gray-200 px-3 py-2 rounded-full flex-1 border border-gray-300 focus:outline-none"
                />
              </div>
            </form>
          </div>
  
          <div className="bg-gray-100 rounded-2xl p-6 flex">
            <div className="flex justify-between w-full">
              <div>
                <p className="font-bold">Account deletion</p>
                <p className="text-gray-500">
                  This action is permanent and cannot be undone
                </p>
              </div>
              <div>
                <button type="button" className="text-red-500 rounded-full py-1 px-2 bg-gray-200 hover:bg-gray-300">Delete account</button>
              </div>
            </div>
          </div>
        </div>
     
    );
  };
  
  export default Profile;
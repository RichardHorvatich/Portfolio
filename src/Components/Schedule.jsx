import React from 'react';

const Schedule = () => {
  return (
    
      
      <div class="min-h-screen mb-24 p-6 bg-gray-900 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-white">richardhorvatich963@gmail.com</h2>
      <p class="text-gray-500 mb-6">Email Me</p>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Or</p>
            <p>Use the form:</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="First and Last Name" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@email.com" />
              </div>

              <div class="md:col-span-5">
                <label for="Phone Number">Phone Number</label>
                <input type="text"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="###-###-####" />
              </div>

              
              <div class="md:col-span-5 row-span-10  mb-10">
                <label for="Reason">Comments / Message</label>
                <input type="text" className="transition-all h-10 flex items-center border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
              </div>

              

              
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
</div>
    </div>
  );
};

export default Schedule;
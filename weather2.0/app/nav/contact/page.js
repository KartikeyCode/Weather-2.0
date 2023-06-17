import Navbar from "@/app/components/navbar"

export default function Contact(){
    return(
        <div className="bg-gradient-to-r  from-[#1F6E8C] to-[#2E8A99] min-h-screen overflow-x-hidden">
            <Navbar></Navbar>
            <div className=" flex flex-col justify-center items-center">
            <h1 className="font-Orbitron xl:text-7xl xl:mt-12 xl:ml-12 text-white"> Contact Us </h1>

           <h2 className="font-Orbitron xl:text-5xl xl:mt-12 xl:ml-12 text-white"> codekartikey@gmail.com </h2>
           
           <div className="items-center flex">

           <a
              href="https://www.instagram.com/wc.smile/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700  transition hover:opacity-75"
              >
              <span class="sr-only">Instagram</span>

              <svg
                class="h-6 w-44"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                  />
              </svg>
            </a>
            <h2 className="font-Orbitron xl:text-5xl xl:mt-12 xl:ml-12 text-white"> @wc.smile </h2>

                  </div>
            <section class="w-[900px] bg-white overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
  <img
    alt="Trainer"
    src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    class="h-32 w-full object-cover md:h-full"
  />

  <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <p class="text-sm font-semibold uppercase tracking-widest">
      Run with the pack
    </p>

    <h2 class="mt-6 font-black uppercase">
      <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
        Get 20% off
      </span>

      <span class="mt-2 block text-sm">On your next order over $50</span>
    </h2>

    <a
      class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href=""
      >
      Get Discount
    </a>

    <p class="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2021 *
    </p>
  </div>
</section>
        </div>
        </div>
    )
}

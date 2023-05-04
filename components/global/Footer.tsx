import React from "react";

import { LocationFragment } from "@/graphql-operations";

type FooterProps = {
  locations: LocationFragment[];
};

function Footer({ locations }: FooterProps) {
  return (
    <footer className="bg-zinc-900 bottom-0 p-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex-none lg:flex">
          <div className="flex flex-col flex-1 pb-4">
            <div className="pb-3 text-lg tracking-tight text-amber-550">
              Welcome! Thank you for choosing Chromatic Theory!
            </div>
            <address className="not-italic text-base text-amber-550 flex flex-col justify-center mb-4 mt-4 w-full gap-2">
              <a
                className="flex flex-col underline hover:text-white hover:no-underline"
                target={"_blank"}
                href="https://www.google.com/maps?ll=43.871323,-79.218709&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=3757030601779132263"
                aria-label="link to google maps location of Hands On Physiotherapy And Rehab Centre/Pelvic Health"
              >
                <span>37120 Fremont Blvd, Ste M, Studio 16</span>
                <span>Fremont, CA 94536</span>
              </a>
            </address>
            <p className="text-amber-550">
              Phone: {""}
              <a
                className="underline hover:text-white hover:no-underline"
                href="tel: +1(510) 514-6630"
              >
                +1(510) 514-6630
              </a>
            </p>

            <p className="text-amber-550">
              E-Mail: {""}
              <a
                className="underline text-lg italic text-amber-550 hover:text-white hover:no-underline"
                href="mailto:stephvnneco@gmail.com?subject=Book%20appointment"
              >
                stephvnneco@gmail.com
              </a>
            </p>
          </div>
          <div className="flex-none w-1/2 space-y-4 md:space-y-0 md:flex">
            <div className="md:flex-none md:w-11/12 text-left lg:text-right">
              <div className="text-amber-550 text-md pb-2">Hours</div>
              <ul className="text-amber-550">
                <li>Sunday: 9:00 - 5:00</li>
                <li>Monday: 9:00 - 5:00</li>
                <li>Tuesday: 9:00 - 5:00</li>
                <li>Wednesday: 9:00 - 5:00</li>
                <li>Thursday: 9:00 - 5:00</li>
                <li>Friday: 9:00 - 5:00</li>
                <li>Saturday: 9:00 - 5:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-amber-550 text-sm pt-8">
          © {new Date().getFullYear()} | Chromatic Theory | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

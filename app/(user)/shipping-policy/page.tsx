"use client";

export default function page() {
  return (
    <main className="shipping-policy">
      <div className="m-[auto] mt-[2rem] mb-[2rem] w-[80%]">
        <h1 className="font-bold text-[var(--text-dark)] text-3xl mb-2">
          Shipping Policy
        </h1>
        <hr className="w-full border-[var(--text-regular)]" />
        <h2 className="text-[var(--text-regular)] font-[400] text-md mt-2 mb-3">
          {`Last updated April 31, 2024`}
        </h2>

        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <b>Your Clothes Store</b>
          {` is offering their customers two different
          delivery options to choose from. Customers can select between any type
          of shipping according to their needs, i.e., Global Shipping & USA
          Premium Shipping.`}
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <ul className="flex flex-col gap-y-3 list-decimal pl-7">
            <li>
              <b>{`Global Shipping: `}</b>{" "}
              {`With Global Shipping, clothes are shipped
              all over the globe. Delivery comes with nominal charges. Global
              Shipping typically takes 12 to 18 business days to deliver. Except
              for seven specific clothes from USA Premium, all other clothes
              mentioned on the website are shipped globally.`}
            </li>
            <li>
              <b>{`USA Premium Shipping: `}</b>{" "}
              {`In USA Premium Shipping, clothes are
              shipped from storage facilities located in the USA, which makes
              delivery time surprisingly short. There are no delivery charges
              for USA Premium Shipping, and it takes 5 to 7 business days to
              deliver.`}
            </li>
          </ul>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <div className="font-semibold text-xl text-[var(--text-dark)]">
            Your Clothes Store
          </div>
          <p className="mt-2 mb-2 pl-7 flex flex-col">
            <span>{`Phone: +1 number `}</span>
            <span>{`abc@gmail.com`}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

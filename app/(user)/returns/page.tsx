"use client";

export default function page() {
  return (
    <main className="return">
      <div className="m-[auto] mt-[2rem] mb-[2rem] w-[80%]">
        <h1 className="font-bold text-[var(--text-dark)] text-3xl mb-2">
          Return & Refund
        </h1>
        <hr className="w-full border-[var(--text-regular)]" />
        <h2 className="text-[var(--text-regular)] font-[400] text-md mt-2 mb-3">
          {`Last updated April 31, 2024`}
        </h2>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <details>
            <summary className="font-semibold text-xl text-[var(--text-dark)]">
              Return & Refund Policy
            </summary>

            <div className="mt-2 mb-2">
              <ul className="list-disc pl-8 w-[90%] flex flex-col gap-y-2">
                <li>
                  {`You can cancel your order any time before making the payment
                  or while your order is being processed. Once the payment is
                  made or the order is shipped, you're not eligible for return
                  &/or refund.`}
                </li>
                <li>
                  {`You can cancel anytime while your payment or order is being
                  processed.`}
                </li>
                <li>
                  {`Once the order is shipped and a tracking number is generated,
                  you cannot cancel your order.`}
                </li>
                <li>
                  {`If the shipment is stuck or rejected by the USA's or India's
                  customs department, one-time free re-shipment is guaranteed
                  (in which we send you the same clothes of the same size and
                  quantity that you ordered for free).`}
                </li>
                <li>
                  {`If your order doesn't get delivered within a maximum of 30
                  days, you can either choose between re-shipment or avail a
                  full refund.`}
                </li>
                <li>
                  {`If you receive a wrong or damaged product, you can choose
                  between re-shipment or a full refund (in that case, we do need
                  photographs of the products that you received and images of
                  the label).`}
                </li>
                <li>
                  {`If you received an incomplete order, e.g., incorrect quantity,
                  incorrect size, or wrong product, then you're eligible for
                  either re-shipping of the missing quantity or a part refund of
                  your payment (e.g., you ordered 180 items of clothes and
                  received 90 items, then we'll either deliver the remaining 90
                  items or we'll refund you the amount for 90 items).`}
                </li>
                <li>
                  {`If USPS (our shipping partner) states that your order is
                  delivered, and you didn't receive it, we request you to kindly
                  check with your neighbor, post office, post box, or family
                  members if they have collected the order on your behalf. You
                  have all the rights to question USPS regarding your order. In
                  such a case, you'll have to pay 50% of the total amount, and
                  the remaining 50% will be covered by us.`}
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <details>
            <summary className="font-semibold text-xl text-[var(--text-dark)]">
              {`Can I return my clothes if I no longer need them?`}
            </summary>
            <p className="mt-2 mb-2 pl-7">
              {`Because we work to ensure the quality of our clothes and to
              protect the interests of other customers, once an order has been
              processed and shipped, it cannot be returned for any reason. All
              sales are final. So before ordering or completing your order,
              please ensure that you are certain about your choice. For more
              information, please refer to our policies section.`}
            </p>
          </details>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <details>
            <summary className="font-semibold text-xl text-[var(--text-dark)]">
              {`Which Products are not eligible for Returns?`}
            </summary>
            <div className="mt-2 mb-2 pl-7">
              {`The products shall not be eligible for a return under the
              following circumstances:`}
              <ul className="list-disc pl-6 w-[90%] flex flex-col gap-y-2">
                <li>
                  {`If the item has been opened, partially used, or disfigured.
                  The user is strongly advised to check the package carefully at
                  the time of acceptance of products from the delivery agent.`}
                </li>
                <li>If the product has been tampered with.</li>
                <li>
                  {`If the product packaging and/or packaging box and/or packaging
                  seal has been tampered with. The user is strongly advised to
                  check the package carefully at the time of acceptance of
                  products from the delivery agent, and it is emphasized that
                  the user should not accept the order if the package appears to
                  be tampered with.`}
                </li>
                <li>
                  {`If the product does not have a serial number / UPC number /
                  barcode affixed, which was present at the time of acceptance
                  of products from the delivery agent.`}
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <details>
            <summary className="font-semibold text-xl text-[var(--text-dark)]">
              {`What is the time period for return of orders?`}
            </summary>
            <p className="mt-2 mb-2 pl-7">
              {`We have a product-specific return policy. The return window ranges
              from 0-30 days from the date of delivery. Please check the return
              policy before placing any order.`}
            </p>
          </details>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <details>
            <summary className="font-semibold text-xl text-[var(--text-dark)]">
              How to Return?
            </summary>
            <p className="mt-2 mb-2 pl-7">
              {`You can raise a return request within the time frame of 0-30 days.`}
            </p>
          </details>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <div className="font-semibold text-xl text-[var(--text-dark)]">
            NOTE
          </div>
          <p className="mt-2 mb-2 pl-7">
            {`Please keep the return package ready in its original packaging with
            all the labels intact.`}
          </p>
        </div>
        <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
          <div className="font-semibold text-xl text-[var(--text-dark)]">
            Your Clothes Store
          </div>
          <p className="mt-2 mb-2 pl-7 flex flex-col ">
            <span>{`Phone: +1 number `}</span>
            <span>{`abc@gmail.com`}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

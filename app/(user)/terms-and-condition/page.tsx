export default function page() {
    return (
        <main>
            <div className="m-[auto] mt-[2rem] mb-[2rem] w-[80%]">
                <h1 className="font-bold text-[var(--text-dark)] text-3xl mb-2">
                    TERMS AND CONDITIONS
                </h1>
                <hr className="w-full border-[var(--text-regular)]" />
                <h2 className="text-[var(--text-regular)] font-[400] text-md mt-2 mb-3">
                    {`Last updated April 18, 2024`}
                </h2>
                <h2 className="text-[var(--text-dark)] font-[600] text-lg mt-2 mb-3">
                    AGREEMENT TO OUR LEGAL TERMS
                </h2>
                <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
                    <details>
                        <summary className="font-semibold text-xl text-[var(--text-dark)]">
                        {`What Information Do We Collect?`}
                        </summary>
                        <div className="mt-2 mb-2 pl-7 flex flex-col gap-y-2">
                            <p>
                                {`We collect two main types of information when you use our website or app:
                                    (1) Information you provide – like your name, phone number, email, address, and any other details you share with us directly.
                                    (2) Information we collect automatically – this includes things like your device type, browser, and general usage data.`}
                            </p>
                            <p>
                                {`Some of this information can identify you personally, and some of it helps us understand how people use our services.`}
                            </p>
                            <p>
                                {`You might also allow us to get your information from other sources. You're free to limit what you share with us, but doing so may prevent you from using certain features or services.`}
                            </p>
                        </div>
                    </details>
                </div>
                <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
                    <details>
                        <summary className="font-semibold text-xl text-[var(--text-dark)]">
                        {`How Do We Use Your Information?`}
                        </summary>
                        <p className="mt-2 mb-2 pl-7">
                            {`We use your information to:`}
                            <ul className="list-disc flex flex-col gap-y-2 pl-7 mt-1 mb-1">
                                <li>{`Respond to your questions or requests`}</li>
                                <li>{`Communicate with you`}</li>
                                <li>{`Provide our services and features`}</li>
                                <li>{`Process applications you submit`}</li>
                                <li>{`Verify your identity when needed`}</li>
                                <li>{`Run surveys and promotions`}</li>
                                <li>{`Personalize your experience`}</li>
                                <li>{`Share offers or updates about our products and services (as allowed by law)`}</li>
                                <li>{`Improve our services, website, and app`}</li>
                                <li>{`Provide updates and support for our software`}</li>
                                <li>{`Follow legal rules and respond to legal requests`}</li>
                                <li>{`Protect your safety, rights, and privacy`}</li>
                                <li>{`Keep records of our communications with you`}</li>
                                <li>{`Carry out any other activity with your permission or as required by law`}</li>
                            </ul>
                        </p>
                    </details>
                </div>
                <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
                    <details>
                        <summary className="font-semibold text-xl text-[var(--text-dark)]">
                            How We Use Your Data
                        </summary>
                        <div className="mt-2 mb-2 flex flex-col pl-7 gap-y-2">
                            <p>{`We may use your information to make your experience with Myus Enterprise better. For example:`}</p>
                            <ul className=" list-disc mt-2 mb-2 flex flex-col gap-y-2 pl-7">
                                <li>{`To fulfill any agreement or contract you’ve made with us`}</li>
                                <li>{`To share information about our services or special offers`}</li>
                                <li>{`To recommend products or services that may interest you`}</li>
                                <li>{`To improve how our website and app work`}</li>
                                <li>{`To understand what our users like and how they behave, so we can improve`}</li>
                                <li>{`To offer special rewards, discounts, or promotions`}</li>
                                <li>{`To reply to your feedback, questions, or issues`}</li>
                                <li>{`To inform you about new deals or updates`}</li>
                                <li>{`To enforce the rules of using our website/app`}</li>
                                <li>{`To keep you safe from fraud or harmful activity`}</li>
                            </ul>
                        </div>
                    </details>
                </div>
                <div className="mt-3 mb-3 font-[600] text-[var(--text-regular)] text-lg">
                    <div className="font-semibold text-xl text-[var(--text-dark)]">
                        Myus Enterprise
                    </div>
                    <p className="mt-2 mb-2 pl-7 flex flex-col ">
                        <span>{`Phone: +91 98339-52804 `}</span>
                        <span>{`myusenterprises@gmail.com`}</span>
                    </p>
                </div>
            </div>
        </main>
    );
}

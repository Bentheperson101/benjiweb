import ContactList from "../Components/ContactList";

const Contact = () => {
    

    return (
        <div>
            <div className="row p-3">
                <div className="col-lg-12 pt-3 text-center">
                    <h1>Where to Contact Me</h1>
                    <h5>You can reach out to me in whatever fashion you would like.</h5>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h2 className="mt-2 mb-3">Here is all my Information: </h2>
                    <ContactList />
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default Contact;
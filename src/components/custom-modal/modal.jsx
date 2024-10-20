import './styles.css';

function Modal({header = null, body = null, footer = null, onClose}){


    return(
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    {
                        header ? header : 
                        <div style={{
                            border: "1px solid black"
                        }}>
                            <div className="title">This is Header</div>
                            <span onClick={onClose}>&times;</span>
                        </div>
                    }
                </div>
                <div className="modal-body">
                    {
                        body ? body :
                        <div style={{
                            border: "1px solid black"
                        }}>
                            Body
                        </div>
                    }
                </div>
                <div className="modal-footer">
                    {
                        footer ? footer :
                        <div style={{
                            border: "1px solid black"
                        }}>
                            Footer
                        </div>
                    }
                </div>
            </div>
        </div>
    )



}

export default Modal;
import React, {useState} from 'react';
import plusImg from '../../img/+.png';
import minusImg from '../../img/-.png';
import './container.scss';

const Container = ({items = [], multiSelect = false}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([])
    const toogle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item])
            } else if (multiSelect) {
                setSelection([... selection, item])
            } else {
                let selectionAfterRemoval = selection;
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id !== item.id
                );
                setSelection([...selectionAfterRemoval])
            }
        }
    }

    function isItemInSelection(item) {
        if(selection.find(current=>current.id===item.id)){
            return true;
        }
        return false;
    }

    return (
        <div className="api-container">
                <div
                    tabIndex={0}
                    onKeyPress={() => toogle(!open)}
                    onClick={() => {
                        toogle(!open)
                    }}  role="button">
                    {
                        items.map((item, key) => (
                            <div className = "list-container">
                                <ul key={item.id}>
                                    <div className="list-questions">
                                        <span className="list-item">{item.value}</span>
                                        <img className="plus-button" src={plusImg} role="button" alt="button" onClick={() => handleOnClick(item)}/>
                                    </div>
                                    <div className="list-item">
                                        <span className="dropdown" style={{backgroundColor:'none'}}>{isItemInSelection(item) && <div className="answer-container">{item.answer}</div>}</span>
                                    </div>
                                </ul>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}
export default Container

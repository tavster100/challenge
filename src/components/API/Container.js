import React, {useState} from 'react';
import plusImg from '../../img/+.png';
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
                setSelection([...selection, item])
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
        if (selection.find(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

    return (
        <div className="api-container">
            {
                items.map((item, key) => {
                    return (
                        <div className="list-container">
                            <ul key={item.id}>
                                <div className="list-questions" tabIndex={0} onClick={() => {
                                    toogle(!open)
                                }} role="button">
                                    <li className="list-item">{item.value}</li>
                                    <img className="plus-button" src={plusImg} role="button" alt="button"
                                         onClick={() => handleOnClick(item)}/>
                                </div>
                                {open && <span className="dropdown">{isItemInSelection(item) &&
                                <div className="answer-container">{item.answer}</div>}</span>
                                }
                            </ul>
                        </div>
                    )
                })
            }
            <div className="load-more-container">
                <span className="load-more">LOAD MORE</span>
                <img className="plus-button" src={plusImg} alt="button"/>
            </div>
        </div>
    )
}
export default Container

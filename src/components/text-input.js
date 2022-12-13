import {useState} from 'react';
export function TextInput({isValid, isRecommended, inputConfig}) {
    let cssClass = 'input-default';
    if (isRecommended) {
        cssClass = 'input-recommended';
    }
    if (!isValid) {
        cssClass = 'input-invalid';
    }
    return <input className={cssClass} {...inputConfig} />
 };
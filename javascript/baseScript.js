//document.write(String(window.innerWidth));
import {getFileData, getFileArray, deAccent} from './functionScript.js';

let serviceArea = document.getElementById('serviceArea');
let serviceData = getFileData('../document/PhauThuatThamMyVI.txt');
let serviceParent = getFileArray(serviceData, 0);
let serviceChild = getFileArray(serviceData, 1);
let serviceDataEN = getFileData('../document/PhauThuatThamMyEN.txt');
let serviceChildEN = getFileArray(serviceDataEN, 1);

for (let i = 0; i < serviceParent.length; i++) {
    let serviceHead = document.createElement('img');
    serviceArea.appendChild(serviceHead);
    serviceHead.id = 'serviceHead';
    serviceHead.src = `../media/Service_${deAccent(serviceParent[i])}.png`;

    let serviceBody = document.createElement('div');
    serviceBody.id = 'serviceBody';
    serviceArea.appendChild(serviceBody);

    for (let j = 0; j < serviceChild[i].length; j++) {
        let service = document.createElement('div');
        let serviceVI = document.createElement('p');
        let serviceEN = document.createElement('p');
        serviceBody.appendChild(service);
        service.appendChild(serviceVI);
        service.appendChild(serviceEN);

        service.id = 'service';
        serviceVI.id = 'serviceVI';
        serviceEN.id = 'serviceEN';
        serviceVI.innerHTML = serviceChild[i][j];
        serviceEN.innerHTML = serviceChildEN[i][j];
    }
}
export const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

//


let notFoundIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
let ab = "Anfrage per Mailbox", nA = "k.A.";

export function todayDate() {
    let heuteTag = new Date();
    let jahr = heuteTag.getFullYear();
    let monat = heuteTag.getMonth();
    let tag = heuteTag.getDate();

    return Date.UTC(jahr, monat, tag);
}

export function alterDesTherapeuten(datum) {
    let laengeJahr = 365 * 24 * 60 * 60 * 1000;
    let heute = todayDate();
    let jahre = (heute - datum) / laengeJahr;
    return Math.floor(jahre);
}

export function hatAlter(eintragAlter) {
    if (isNaN(eintragAlter)) {
        return notFoundIcon + ' ' + nA;
    }

    return alterDesTherapeuten(eintragAlter) + '&nbsp;Jahre';
}

export function duplikatElem(arr) {
    let listeTatsächlich = [];

    for (let element of arr) {
        if (listeTatsächlich.indexOf(element) === -1) {
            listeTatsächlich.push(element);
        }
    }
    return listeTatsächlich;
}
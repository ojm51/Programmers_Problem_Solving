function solution(str_list) {
    const idxL = str_list.indexOf("l");
    const idxR = str_list.indexOf("r");
    
    if(idxL === -1 && idxR === -1) return [];
    if(idxL !== -1 && idxR === -1) return str_list.slice(0, idxL);
    if(idxL === -1 && idxR !== -1) return str_list.slice(idxR + 1);
    if(idxL < idxR) return str_list.slice(0, idxL);
    if(idxL > idxR) return str_list.slice(idxR + 1);
}
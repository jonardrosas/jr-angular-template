
export const splitText = (text: string): string[] => {
  return text.split('').map((data: string) => {
    if (data === '|') {
      return '&nbsp;';
    } else {
      return data;
    }
  });
}


export const convertTextToList2 = (text: string): string[] => {
  if (!text) {
    return [];
  }
  let finalText: any[] = [];
  const subtitle = text.replace(/\s+/g, '|');
  if (subtitle.includes("<br/>")){
    const texts = subtitle.split('<br/>')
    texts.forEach(txt => {
      finalText.push([splitText(txt)])
    })
  }else{
    finalText.push([splitText(subtitle)])
  }
  return finalText
};



export const convertTextToList = (text: string): string[] => {
  if (!text) {
    return [];
  }
  const subtitle = text.replace(/\s+/g, '|');
  return splitText(subtitle)
};

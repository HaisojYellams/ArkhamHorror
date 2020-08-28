class StringUtils {
  public static namify(str: string): string {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');
    return str.split(' ')
      .map(
        (word, index): string => {
          if (index === 0) {
            return word;
          }
          return word[0].toUpperCase() + word.substring(1);
        }
      )
      .join('');
  }
}

export default StringUtils;

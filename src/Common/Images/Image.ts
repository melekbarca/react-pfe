import { piximindIconSmall } from "@piximind/ds-p-23"
class Image {
  
  private static instance: Image 
  public image : any
  constructor() {
    this.image = piximindIconSmall
  }
  public static getInstance(): Image {
    if (!Image.instance) {
      Image.instance = new Image()
    }
    Image
    return Image.instance
  }

  
}
export { Image }


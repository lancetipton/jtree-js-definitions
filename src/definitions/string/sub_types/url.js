import StringType from '../string'
import { isStr } from 'jsutils'
class UrlType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid URL format. Please enter a valid URL.`
  }
  
  static eval = value => {
    if (!value || !isStr(value)) return false

    const regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
    return Boolean(regex.test(value))
  }
  
  constructor(config){
    super(config)
  }

}

export default UrlType
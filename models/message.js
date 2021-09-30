const { v4: uuidv4 } = require('uuid')

const messagesDb = [
  {
    id: uuidv4(),
    firstName: 'Texter1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum, arcu quis eros magnis laoreet malesuada platea ridiculus, torquent auctor tempor scelerisque metus neque sem. Ultricies mattis maximus nam litora maecenas sed orci aptent blandit at, dictumst mus eleifend lobortis porta lectus diam commodo dignissim, praesent proin quam consectetur ipsum suspendisse fringilla integer in. Adipiscing aliquet imperdiet pulvinar velit sapien praesent etiam sagittis consequat, ultrices phasellus elit taciti fames nullam augue odio, euismod primis enim orci nec dignissim vestibulum penatibus. Lacus dis lacinia mus dignissim fringilla, aliquam rhoncus pellentesque purus viverra, maximus vestibulum morbi quis. Dolor adipiscing velit dis accumsan imperdiet tempor maecenas platea, sociosqu efficitur a tortor eget risus natoque luctus viverra, magnis laoreet nascetur dictumst iaculis pretium orci. Leo fusce hac scelerisque neque vehicula integer cras est molestie, at bibendum lacus nunc himenaeos ligula lorem suspendisse, varius taciti vulputate ridiculus lobortis porttitor habitasse netus. Eget proin vestibulum mollis quis pharetra phasellus pellentesque viverra, habitant turpis porta urna cursus torquent quisque natoque, et morbi adipiscing maximus dolor dictumst scelerisque. Ridiculus lobortis morbi varius porta duis enim dis primis dapibus porttitor aliquam, arcu sollicitudin phasellus ad etiam suspendisse nullam pellentesque curae. Lacus bibendum class himenaeos elementum at lorem vivamus curabitur fusce habitasse, montes nisi sociosqu dolor parturient enim massa torquent hendrerit, auctor a eros ut posuere potenti vehicula morbi tortor. Ultricies quisque fermentum accumsan id maximus diam efficitur, vestibulum neque nec urna erat condimentum, arcu tempus vulputate laoreet curabitur congue.',
    email: 'test1@test.test'
  },
  {
    id: uuidv4(),
    firstName: 'Texter2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit elementum, himenaeos vestibulum turpis posuere mattis semper accumsan dictum augue, commodo ad ex finibus a curabitur parturient. Imperdiet purus lacinia feugiat eu malesuada vitae venenatis, tempor pharetra ac cras et scelerisque urna nulla, elit ut ipsum nostra fames maximus. Congue ridiculus suscipit vulputate fringilla enim at habitasse ac, eros libero massa quis bibendum placerat adipiscing molestie sapien, semper feugiat lacinia maecenas ad nascetur posuere. Libero sapien donec a taciti vehicula erat praesent maximus ultrices habitant ornare odio, laoreet sagittis himenaeos lacus bibendum convallis nascetur tellus amet aliquam parturient fermentum, sem nibh ultricies rhoncus sodales elit nam velit vitae penatibus mauris. Nibh ante vivamus hendrerit facilisi est id proin inceptos litora, elementum nascetur orci enim convallis a at adipiscing tincidunt, et lacinia sociosqu purus semper ligula ultrices pulvinar. Etiam sagittis habitasse lorem sem nunc libero maximus imperdiet placerat orci pretium pellentesque, et est vestibulum congue praesent fusce eleifend facilisis dis sodales augue dictumst, mus dapibus amet proin euismod platea porta ut consectetur lacus interdum. Urna nostra turpis ut sem nulla suscipit, vehicula torquent arcu senectus posuere ultrices tortor, justo habitasse amet fusce interdum. Ultrices luctus orci phasellus fermentum parturient aliquam tempus interdum, at quam primis habitant vestibulum nulla porttitor consequat, inceptos aliquet facilisi mauris mi nisi odio. Consequat efficitur lobortis aenean tristique ut et consectetur class varius viverra, nascetur adipiscing platea odio ullamcorper leo ad accumsan. Curae iaculis fames libero nullam aenean hendrerit vitae curabitur efficitur dis, ullamcorper euismod pharetra bibendum primis litora tempor lorem per lectus velit, dignissim cursus integer commodo convallis dolor sit elit posuere.',
    email: 'test2@test.test'
  },
  {
    id: uuidv4(),
    firstName: 'Texter3',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipiscing elit conubia primis non, morbi mattis in ut. Quam nisl class potenti interdum nostra eros parturient, nec placerat pharetra non montes neque erat, eget platea accumsan laoreet sollicitudin cubilia. Donec proin est vivamus maximus auctor condimentum sapien commodo lacus orci, mus tempor nullam faucibus eu sodales adipiscing hac sollicitudin, curae viverra elementum ad congue consequat purus nec vestibulum.',
    email: 'test3@test.test'
  }
]

class Message {
  static messages = messagesDb
  static getMessages () {
    return Message.messages
  }
  static getMessageById (id) {
    const [foundUser] = Message.messages.filter(u => u.id == id)
    return foundUser
  }
  static createMessage (body) {
    const createdMessage = { ...body, id: uuidv4() }
    Message.messages.push(createdMessage)
    return Message.messages[Message.messages.length - 1]
  }
}

module.exports = Message

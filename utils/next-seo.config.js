const ht = {
  title: 'Sevinou - Pou peyi a',
  description: 'Nou la pou ede tout fami nou'
}
const fr = {
  title: 'Sevinou - Pour le Peyi',
  description: 'Nous somme ici pour ede'
}
const en = {
  title: 'Sevinou - For the Country',
  description: 'We are here to help the families'
}

export default function(locale) {
  const { title, description} = { ht, fr, en }[locale] || ht;
  return {
    title, description,
    titleTemplate: '%s | Sevinou',
    openGraph: {
      title, description,
      appId: '259264925439758',
      site_name: 'Sevinou',
      type: 'website',
      url: 'https://sevinou.com'
    }
  }
}

async function fetchMap() {
  try {
    const res = await fetch('https://inspiringpathways.in/directory/ephphatha-therapy-center/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    
    const data = await res.text();
    
    // Look for any string near "Address" or "Phone"
    const addressContext = data.match(/.{0,50}Palaniappa Nagar.{0,100}/ig);
    console.log('Address Context:', addressContext ? [...new Set(addressContext)] : 'None');
    
    const phoneContext = data.match(/.{0,50}directorist-single-info-phone.{0,100}/ig);
    console.log('Phone Context:', phoneContext ? [...new Set(phoneContext)] : 'None');
    
    const phoneContext2 = data.match(/.{0,50}97911.{0,100}/ig);
    console.log('Phone Context 2:', phoneContext2 ? [...new Set(phoneContext2)] : 'None');
    
  } catch (e) {
    console.error(e.message);
  }
}

fetchMap();

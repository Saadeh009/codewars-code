/*

You will receive an array of addresses and zipcodes in ad, in code you have the zip codes you want to group the addresses by, in this format

ZIP CODE: "street town 1,street town 2..., street number 1,street number 2..."

steps:

1. Split "ad" on every ,
2. filter the array where, when we split the array element into further elements for every " ", the last element and element before last match the one in `code` 
3. on those filtered elements, perform array manipulation and return them in the above format.
*/

const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"

  const code = "OH 43071";

const travel = (r:string, zipcode:string): string => {
    // your code
    const addressArray = r.split(",")
    let tmp
    let tmpZip
    let resHomeStreet = ''
    let resStreet = ''
    for (let address of addressArray) {
      tmp = address.split(" ")
      tmpZip = tmp[tmp.length - 2] + " " + tmp[tmp.length - 1]

      if (zipcode === tmpZip) {
        resHomeStreet += `${tmp.slice(1, -2).join(" ")},`
        resStreet += `${tmp.slice(0, 1).join("")},`
      }
    }
    resHomeStreet = resHomeStreet.slice(0,-1)
    resStreet = resStreet.slice(0,-1)
    let finalRes = `${zipcode}:${resHomeStreet}/${resStreet}`
    return finalRes
  }
console.log(travel(ad, code))
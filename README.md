# Michael Grigoryan - API

### Live ISS(International Space Station) Position API
API Link: http://api.michaelgrigoryan.com/iss-api
<br />
Example: http://api.michaelgrigoryan.com/iss

#### Example with real data
##### Response comes in JSON. <b>details</b> has all the data about the station's location, <b>timestamp</b> is the value in seconds which presents the active time of the API which comes from http://open-notify.org
```json  
{
  "details": {
      "timestamp": 1598372939,
      "iss_position": {
          "longitude": "160.4273",
          "latitude": "20.8387"
      },
      "message": "success"
  },
  "apiStatus": "Online"
}
```

#### Example with object types
##### Response comes in JSON. <b>details</b> has all the data about the station's location, <b>timestamp</b> is the value in seconds which presents the active time of the API which comes from http://open-notify.org
```json
{
  "details": {
      "timestamp": UNIX_TIME_STAMP(Num),
      "iss_position": {
          "longitude": CURRENT_LATITUDE(Num),
          "latitude": CURRENT_LONGITUDE(Num)
      },
      "message": "success"(String)
  },
  "apiStatus": CURRENT_API_STATUS(String)
}
```
###### Special thanks to [open-notify.org](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) for providing real-time data.

### Random Numbers API
API Link: http://api.michaelgrigoryan.com/random-number-api
<br />
Example: http://api.michaelgrigoryan.com/random-number

#### Example with real data
##### Response comes in JSON with 2 types of random numbers: Integer and Decimal 
```json
{
    "results": {
        "randomNum": 0.9905189159078984,
        "randomInt": 7
    },
    "apiStatus": "Online"
}
```

#### Example with object types
##### Response comes in JSON with 2 types of random numbers: Integer and Decimal 
```json  
{
    "results": {
        "randomNum": RANDOM_NUMBER(Num),
        "randomInt": RANDOM_INTEGER(Int)
    },
    "apiStatus": API_STATUS(Str)
}
```

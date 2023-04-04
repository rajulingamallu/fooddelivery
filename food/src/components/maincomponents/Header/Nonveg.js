import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import one from '../../../assets/images/12.jpg'
import two from '../../../assets/images/13.jpg'
import three from '../../../assets/images/14.jpg'
import four from '../../../assets/images/15.jpg'
import five from '../../../assets/images/16.jpg'
import six from '../../../assets/images/17.jpg'
import seven from '../../../assets/images/18.jpg'
import eight from '../../../assets/images/19.jpg'
import nine from '../../../assets/images/20.jpg'
import ten from '../../../assets/images/12.jpg'
import eleven from '../../../assets/images/13.jpg'
import twelve from '../../../assets/images/14.jpg'
import thirteen from '../../../assets/images/15.jpg'
import fourteen from '../../../assets/images/16.jpg'
import fifteen from '../../../assets/images/17.jpg'
import sixteen from '../../../assets/images/18.jpg'
import seventeen from '../../../assets/images/19.jpg'
import eighteen from '../../../assets/images/20.jpg'
import ninteen from '../../../assets/images/12.jpg'
import twenty from '../../../assets/images/13.jpg'
import twentyone from '../../../assets/images/14.jpg'
import twentytwo from '../../../assets/images/15.jpg'
// const nonveg=[
//   [
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 20435945,
//             "name": "Arabian Knight's Marhaba",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/c10/d14b56add2df8bd93072186578d8dc10.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/5/20435945/04362eabdddadd3fa006ab45aee192b6_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.4",
//                 "rating_text": "3.4",
//                 "rating_subtitle": "Average",
//                 "rating_color": "CDD614",
//                 "votes": "94",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "2.6",
//                         "reviewCount": "5",
//                         "reviewTextSmall": "5 Reviews",
//                         "subtext": "5 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "2.6",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "yellow",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.2",
//                         "reviewCount": "89",
//                         "reviewTextSmall": "89 Reviews",
//                         "subtext": "89 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.2",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "700"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹950 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Narayanguda, Hyderabad",
//                 "address": "3-5-1068, 3-5-1078 And 3-5-1081, Amberpet Circle 16, Narayanguda, Hyderabad",
//                 "localityUrl": "hyderabad/narayanguda-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/mandi/",
//                     "name": "Mandi"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
//                     "name": "Kebab"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
//                     "name": "Mughlai"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
//                     "name": "Biryani"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
//                     "name": "Beverages"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
//                     "name": "Desserts"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "38 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/arabian-knights-marhaba-narayanguda/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/arabian-knights-marhaba-narayanguda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20435945%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "3.9 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20435945\",\"element_type\":\"listing\",\"rank\":1}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "30% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "950+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 20476250,
//             "name": "Suruchi Grand",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/5e4/0c21b385f59b8f7b62adb0daf2a435e4.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/0/20476250/bb5724d908d5cac54f54004229dee97f_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.8",
//                 "rating_text": "3.8",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "328",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "",
//                         "reviewCount": "0",
//                         "reviewTextSmall": "0 Reviews",
//                         "subtext": "Does not offer Dining",
//                         "color": "",
//                         "ratingV2": "-",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "grey",
//                             "tint": "500"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "3.8",
//                         "reviewCount": "328",
//                         "reviewTextSmall": "328 Reviews",
//                         "subtext": "328 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "3.8",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹600 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Ramanthapur, Hyderabad",
//                 "address": "Shop 1 To 10, Sub Ground, Sai Bhavanis Mirra Kamishetty Mall, Ramanthapur, Hyderabad",
//                 "localityUrl": "hyderabad/ramanthapur-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "45 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/suruchi-grand-ramanthapur/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/suruchi-grand-ramanthapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20476250%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "6.5 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20476250\",\"element_type\":\"listing\",\"rank\":2}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "40% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "1600+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 18682853,
//             "name": "Mr. Pulao",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/4cd/134ee16d0adb06db66f0f4931223d4cd.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/chains/1/18596301/f809baba5fff10f8134716625391a931_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.8",
//                 "rating_text": "3.8",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "33.1K",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.9",
//                         "reviewCount": "458",
//                         "reviewTextSmall": "458 Reviews",
//                         "subtext": "458 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.9",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "3.7",
//                         "reviewCount": "32.7K",
//                         "reviewTextSmall": "32.7K Reviews",
//                         "subtext": "32.7K Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "3.7",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹550 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Dilsukhnagar, Hyderabad",
//                 "address": "Room 2, 13-4-29, Vikas Nagar, Gaddiannaram, Dilsukhnagar, Hyderabad",
//                 "localityUrl": "hyderabad/dilsukhnagar-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/andhra/",
//                     "name": "Andhra"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
//                     "name": "Biryani"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "41 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/mr-pulao-dilsukhnagar/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/mr-pulao-dilsukhnagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18682853%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "5.6 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18682853\",\"element_type\":\"listing\",\"rank\":3}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "30% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "2900+ orders placed from here recently"
//             },
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
//                     "aspect_ratio": 2.0625
//                 },
//                 "text": "Restaurant partner follows WHO protocol"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 20456350,
//             "name": "Sofra Culture Cuisine",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/pictures/0/20456350/c9368224ecdf379e667f6cf8cbb60878_o2_featured_v2.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/0/20456350/c9368224ecdf379e667f6cf8cbb60878_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "4.0",
//                 "rating_text": "4.0",
//                 "rating_subtitle": "Very Good",
//                 "rating_color": "5BA829",
//                 "votes": "156",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.9",
//                         "reviewCount": "75",
//                         "reviewTextSmall": "75 Reviews",
//                         "subtext": "75 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.9",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.1",
//                         "reviewCount": "81",
//                         "reviewTextSmall": "81 Reviews",
//                         "subtext": "81 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.1",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "700"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹450 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Banjara Hills, Hyderabad",
//                 "address": "8-2-682/3, A & B Road 12, Banjara Hills, Hyderabad",
//                 "localityUrl": "hyderabad/banjara-hills-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
//                     "name": "Biryani"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/mandi/",
//                     "name": "Mandi"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
//                     "name": "South Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/arabian/",
//                     "name": "Arabian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
//                     "name": "Mughlai"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
//                     "name": "Desserts"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
//                     "name": "Beverages"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "49 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/sofra-culture-cuisine-banjara-hills/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/sofra-culture-cuisine-banjara-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20456350%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "6.1 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20456350\",\"element_type\":\"listing\",\"rank\":4}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "20% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "125+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 20531725,
//             "name": "The Bon Appetite",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/7c8/23c4acd9913edfdf095c3adfe71ec7c8.png"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/5/20531725/912e5646047d6634b52d50eaebe117ea_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.9",
//                 "rating_text": "3.9",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "62",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.7",
//                         "reviewCount": "11",
//                         "reviewTextSmall": "11 Reviews",
//                         "subtext": "11 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.7",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.0",
//                         "reviewCount": "51",
//                         "reviewTextSmall": "51 Reviews",
//                         "subtext": "51 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.0",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹300 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Kacheguda, Hyderabad",
//                 "address": "3-4-1005/5, Barkatpura, Bus Depot Lane, Kacheguda, Hyderabad",
//                 "localityUrl": "hyderabad/kacheguda-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
//                     "name": "Biryani"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "45 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/the-bon-appetite-kacheguda/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/the-bon-appetite-kacheguda/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20531725%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "4 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20531725\",\"element_type\":\"listing\",\"rank\":5}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "40% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "150+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 20418507,
//             "name": "Kebab Culture",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/2df/10d157d0701f59f7b45f72c7826e52df.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/7/20418507/6671dd2af3cf2d8008826a0a73579eb0_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "4.0",
//                 "rating_text": "4.0",
//                 "rating_subtitle": "Very Good",
//                 "rating_color": "5BA829",
//                 "votes": "61",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "",
//                         "reviewCount": "0",
//                         "reviewTextSmall": "0 Reviews",
//                         "subtext": "Does not offer Dining",
//                         "color": "",
//                         "ratingV2": "-",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "grey",
//                             "tint": "500"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.0",
//                         "reviewCount": "61",
//                         "reviewTextSmall": "61 Reviews",
//                         "subtext": "61 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.0",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹500 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "RTC X roads, Hyderabad",
//                 "address": "5 & 6, No- 1-7-1074/B, Sri Dutta Sai Complex, RTC X roads, Hyderabad",
//                 "localityUrl": "hyderabad/rtc-x-roads-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
//                     "name": "Kebab"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "51 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/kebab-culture-2-rtc-x-roads/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/kebab-culture-2-rtc-x-roads/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20418507%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "5.2 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20418507\",\"element_type\":\"listing\",\"rank\":6}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "20% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "200+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 18635417,
//             "name": "Balapur Bawarchi Restaurant",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/60f/6ae4362de8eb232c7df4ace1cd66260f.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/7/18635417/2a7c8d61d8cb04e9fa21e0e9e900f89d_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "4.0",
//                 "rating_text": "4.0",
//                 "rating_subtitle": "Very Good",
//                 "rating_color": "5BA829",
//                 "votes": "6,717",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.9",
//                         "reviewCount": "183",
//                         "reviewTextSmall": "183 Reviews",
//                         "subtext": "183 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.9",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.0",
//                         "reviewCount": "6,534",
//                         "reviewTextSmall": "6,534 Reviews",
//                         "subtext": "6,534 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.0",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹550 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Meerpet, Hyderabad",
//                 "address": "16-1-148/1, Beside More Super Market, Balapur X Roads, Meerpet, Hyderabad",
//                 "localityUrl": "hyderabad/meerpet-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
//                     "name": "Biryani"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
//                     "name": "Mughlai"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
//                     "name": "Seafood"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "37 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/balapur-bawarchi-restaurant-meerpet/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/balapur-bawarchi-restaurant-meerpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18635417%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "6.9 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18635417\",\"element_type\":\"listing\",\"rank\":7}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "20% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "1650+ orders placed from here recently"
//             },
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
//                     "aspect_ratio": 2.0625
//                 },
//                 "text": "Restaurant partner follows WHO protocol"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 18274311,
//             "name": "Hotel Grand Swagath",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/eb9/32eac4a0a9f17fa08dbe6f27c8172eb9.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/1/18274311/6a63de328b9b52926c63fd95b0003823_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "4.0",
//                 "rating_text": "4.0",
//                 "rating_subtitle": "Very Good",
//                 "rating_color": "5BA829",
//                 "votes": "1,610",
//                 "subtext": "REVIEW",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.9",
//                         "reviewCount": "292",
//                         "reviewTextSmall": "292 Reviews",
//                         "subtext": "292 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.9",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.0",
//                         "reviewCount": "1,318",
//                         "reviewTextSmall": "1,318 Reviews",
//                         "subtext": "1,318 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.0",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹1,200 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Ramanthapur, Hyderabad",
//                 "address": "House 3-80, Survey 26, Indira Nagar, Opposite Hyderabad Public School, Ramanthapur, Hyderabad",
//                 "localityUrl": "hyderabad/ramanthapur-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
//                     "name": "Seafood"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "52 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/hotel-grand-swagath-ramanthapur/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/hotel-grand-swagath-ramanthapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18274311%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "7.5 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18274311\",\"element_type\":\"listing\",\"rank\":8}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "30% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "1275+ orders placed from here recently"
//             },
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
//                     "aspect_ratio": 2.0625
//                 },
//                 "text": "Restaurant partner follows WHO protocol"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 19795690,
//             "name": "Punjabi Family Dhaba",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/dish_photos/2af/7ed76f1bed23d928df03d8a4322922af.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/0/19795690/211b8a9b215b213a226b686d6aa87424_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.5",
//                 "rating_text": "3.5",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "1,496",
//                 "subtext": "REVIEW",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "2.9",
//                         "reviewCount": "7",
//                         "reviewTextSmall": "7 Reviews",
//                         "subtext": "7 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "2.9",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "yellow",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.0",
//                         "reviewCount": "1,489",
//                         "reviewTextSmall": "1,489 Reviews",
//                         "subtext": "1,489 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.0",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹600 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Meerpet, Hyderabad",
//                 "address": "21/181, Balapur, Meerpet, Hyderabad",
//                 "localityUrl": "hyderabad/meerpet-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
//                     "name": "Mughlai"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
//                     "name": "Biryani"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "44 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/punjabi-family-dhaba-meerpet/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/punjabi-family-dhaba-meerpet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19795690%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "7.2 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19795690\",\"element_type\":\"listing\",\"rank\":9}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "20% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "1000+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 93049,
//             "name": "Aangan - Yaatri Nivas",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/pictures/9/93049/24563376bc6754f4436ab2b30cf9b62e_o2_featured_v2.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/9/93049/24563376bc6754f4436ab2b30cf9b62e_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.7",
//                 "rating_text": "3.7",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "459",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.6",
//                         "reviewCount": "69",
//                         "reviewTextSmall": "69 Reviews",
//                         "subtext": "69 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.6",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "3.7",
//                         "reviewCount": "390",
//                         "reviewTextSmall": "390 Reviews",
//                         "subtext": "390 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "3.7",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹1,300 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Yatri Nivas, S P Road, Secundrabad, Secunderabad",
//                 "address": "Door 1-8-180/B, Yatri Nivas, S P Road, Secunderabad",
//                 "localityUrl": "hyderabad/restaurants/in/yatri-nivas-s-p-road-secundrabad"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/andhra/",
//                     "name": "Andhra"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
//                     "name": "Beverages"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
//                     "name": "Desserts"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "56 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/aangan-yaatri-nivas-sp-road-secunderabad/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/aangan-yaatri-nivas-sp-road-secunderabad/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F93049%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "8.6 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"93049\",\"element_type\":\"listing\",\"rank\":10}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "Pro extra 15% OFF",
//                 "color": {
//                     "tint": "600",
//                     "type": "pink"
//                 }
//             },
//             {
//                 "text": "30% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "225+ orders placed from here recently"
//             },
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
//                     "aspect_ratio": 2.0625
//                 },
//                 "text": "Restaurant partner follows WHO protocol"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 19652440,
//             "name": "A2 Fast Food",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/pictures/0/19652440/c05f067c63cc727845a420464c1f34e9_o2_featured_v2.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/0/19652440/c05f067c63cc727845a420464c1f34e9_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.9",
//                 "rating_text": "3.9",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "509",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "",
//                         "reviewCount": "1",
//                         "reviewTextSmall": "1 Reviews",
//                         "subtext": "Does not offer Dining",
//                         "color": "",
//                         "ratingV2": "-",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "grey",
//                             "tint": "500"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "3.9",
//                         "reviewCount": "508",
//                         "reviewTextSmall": "508 Reviews",
//                         "subtext": "508 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "3.9",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "600"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹300 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Ramanthapur, Hyderabad",
//                 "address": "3-16-102/K11, Kamakshipuram, Venkat Reddy Nagar, Ramanthapur, Hyderabad",
//                 "localityUrl": "hyderabad/ramanthapur-restaurants"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "52 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/a2-fast-food-ramanthapur/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/a2-fast-food-ramanthapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19652440%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "6.1 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19652440\",\"element_type\":\"listing\",\"rank\":11}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [
//             {
//                 "text": "30% OFF",
//                 "color": {
//                     "tint": "500",
//                     "type": "blue"
//                 }
//             }
//         ],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "350+ orders placed from here recently"
//             }
//         ]
//     },
//     {
//         "type": "restaurant",
//         "info": {
//             "resId": 90876,
//             "name": "Urvasi Takeaway - Hotel Urvashi",
//             "image": {
//                 "url": "https://b.zmtcdn.com/data/pictures/chains/6/90876/b2649c64c1ecb967e97b85fea31e5dac_o2_featured_v2.jpg"
//             },
//             "o2FeaturedImage": {
//                 "url": "https://b.zmtcdn.com/data/pictures/chains/6/90876/b2649c64c1ecb967e97b85fea31e5dac_o2_featured_v2.jpg"
//             },
//             "rating": {
//                 "has_fake_reviews": 0,
//                 "aggregate_rating": "3.8",
//                 "rating_text": "3.8",
//                 "rating_subtitle": "Good",
//                 "rating_color": "9ACD32",
//                 "votes": "330",
//                 "subtext": "REVIEWS",
//                 "is_new": false
//             },
//             "ratingNew": {
//                 "newlyOpenedObj": null,
//                 "suspiciousReviewObj": null,
//                 "ratings": {
//                     "DINING": {
//                         "rating_type": "DINING",
//                         "rating": "3.3",
//                         "reviewCount": "43",
//                         "reviewTextSmall": "43 Reviews",
//                         "subtext": "43 Dining Reviews",
//                         "color": "#1C1C1C",
//                         "ratingV2": "3.3",
//                         "subtitle": "DINING",
//                         "sideSubTitle": "Dining Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "500"
//                         }
//                     },
//                     "DELIVERY": {
//                         "rating_type": "DELIVERY",
//                         "rating": "4.2",
//                         "reviewCount": "287",
//                         "reviewTextSmall": "287 Reviews",
//                         "subtext": "287 Delivery Reviews",
//                         "color": "#E23744",
//                         "ratingV2": "4.2",
//                         "subtitle": "DELIVERY",
//                         "sideSubTitle": "Delivery Reviews",
//                         "bgColorV2": {
//                             "type": "green",
//                             "tint": "700"
//                         },
//                         "newOnDelivery": false
//                     }
//                 }
//             },
//             "cft": {
//                 "text": "₹950 for two"
//             },
//             "cfo": {
//                 "text": "₹300 for one"
//             },
//             "locality": {
//                 "name": "Hotel Urvasi, Panjagutta, Hyderabad",
//                 "address": "Hotel Urvashi, Plot 6-3-665/A/1, Opposite NIMS, Panjagutta Main Road, Panjagutta, Hyderabad",
//                 "localityUrl": "hyderabad/restaurants/in/hotel-urvasi-panjagutta"
//             },
//             "timing": {
//                 "text": "",
//                 "color": ""
//             },
//             "cuisine": [
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
//                     "name": "North Indian"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
//                     "name": "Chinese"
//                 },
//                 {
//                     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
//                     "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
//                     "name": "South Indian"
//                 }
//             ],
//             "should_ban_ugc": false,
//             "costText": {
//                 "text": "₹300 for one"
//             }
//         },
//         "order": {
//             "deliveryTime": "58 min",
//             "isServiceable": true,
//             "hasOnlineOrdering": true,
//             "actionInfo": {
//                 "text": "Order Now",
//                 "clickUrl": "/hyderabad/urvasi-takeaway-hotel-urvashi-panjagutta/order"
//             }
//         },
//         "gold": [],
//         "takeaway": [],
//         "cardAction": {
//             "text": "",
//             "clickUrl": "/hyderabad/urvasi-takeaway-hotel-urvashi-panjagutta/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gTm9uIFZlZyBTdGFydGVycyIsImRpc2hfaWRzIjpbIjU1MTQ1Il0sImN1aXNpbmVfaWRzIjpbXX19",
//             "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F90876%3Futm_campaign%3D57b703581fffcaa5eb61ad798126e0c5%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
//         },
//         "distance": "6.7 km",
//         "isPromoted": false,
//         "promotedText": "",
//         "trackingData": [
//             {
//                 "table_name": "zsearch_events_log",
//                 "payload": "{\"search_id\":\"16d9c5d0-a40d-4522-8f5d-3c9e28d6df50\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"90876\",\"element_type\":\"listing\",\"rank\":12}",
//                 "event_names": {
//                     "tap": "{\"action\":\"tap\"}",
//                     "impression": "{\"action\":\"impression\"}"
//                 }
//             }
//         ],
//         "allCTA": [],
//         "promoOffer": "",
//         "checkBulkOffers": true,
//         "bulkOffers": [],
//         "isDisabled": false,
//         "bottomContainers": [
//             {
//                 "image": {
//                     "url": "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
//                 },
//                 "text": "125+ orders placed from here recently"
//             }
//         ]
//     }
// ]


// ]
 const NonVeg = () => {
    const navigate =useNavigate();
    const backHome =()=>{
      navigate("/");
    }
    const navigateToOrder =()=>{
      navigate("/Order")
    }
    return (
      <div className='row m-5 pl-4'>
        <h3>
          <center>        
        Top NON-VEG Items <Button onClick={backHome} style={{float:'right',backgroundColor:"#2c9c7a",border:'none'}}>BACK</Button>
          </center>
          </h3>
  
        <Card style={{ width: '15rem',margin:'8px' }}>
        <Card.Img variant="top" src={one} />
        <Card.Body>
          <Card.Title>biryani</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={two} style={{height:'18rem'}} />
        <Card.Body>
          <Card.Title>tandoori</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={three} style={{ height: '18rem'}}/>
        <Card.Body>
          <Card.Title>prawns</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={five} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={six} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={seven} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={eight} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={nine} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={ten} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={eleven} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={thirteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={fourteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={fifteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={sixteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={seventeen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={eighteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={ninteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twenty} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twentyone} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twentytwo} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={ten} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={eleven} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={thirteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={fourteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={fifteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={sixteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={seventeen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={eighteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={ninteen} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twenty} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twentyone} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={twentytwo} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',margin:'15px' }}>
        <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
        <Card.Body>
          <Card.Title>fish</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={navigateToOrder} variant="danger">Order</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }
  export default NonVeg
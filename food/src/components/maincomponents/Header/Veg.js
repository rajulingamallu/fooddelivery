import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import one from '../../../assets/images/30.jpg'
import two from '../../../assets/images/31.jpg'
import three from '../../../assets/images/40.jpg'
import four from '../../../assets/images/33.jpg'
import five from '../../../assets/images/34.jpg'
import six from '../../../assets/images/35.jpg'
import seven from '../../../assets/images/36.jpg'
import eight from '../../../assets/images/37.jpg'
import nine from '../../../assets/images/38.jpg'
import ten from '../../../assets/images/39.jpg'
import eleven from '../../../assets/images/40.jpg'
import twelve from '../../../assets/images/30.jpg'
import thirteen from '../../../assets/images/31.jpg'
import fourteen from '../../../assets/images/40.jpg'
import fifteen from '../../../assets/images/33.jpg'
import sixteen from '../../../assets/images/34.jpg'
import seventeen from '../../../assets/images/35.jpg'
import eighteen from '../../../assets/images/36.jpg'
import nineteen from '../../../assets/images/37.jpg'
const vegg=[
  [
    {
        "type": "restaurant",
        "info": {
            "resId": 20431653,
            "name": "Salvia A Fine Dine Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20431653/9e7b38e4fa24f219c8441ba05900e5f7_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/20431653/9e7b38e4fa24f219c8441ba05900e5f7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20431653/6bfef986ac87aaeac83cdfa22c9207f0_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.5",
                "rating_text": "3.5",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "79",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "14",
                        "reviewTextSmall": "14 Reviews",
                        "subtext": "14 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.6",
                        "reviewCount": "65",
                        "reviewTextSmall": "65 Reviews",
                        "subtext": "65 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.6",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹950 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Lingampally, Hyderabad",
                "address": "Plot 91/B, Ground Floor, Nallagandla Huda Residential Layout, Gopan Palli Road, Lingampally, Hyderabad",
                "localityUrl": "hyderabad/lingampally-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/pasta/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹950 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/salvia-a-fine-dine-restaurant-lingampally/info",
            "clickActionDeeplink": ""
        },
        "distance": "20.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20431653\",\"element_type\":\"listing\",\"rank\":58}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 90860,
            "name": "Famous Ice Creams",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/90860/3c29c86d51b19e26834cf088a053e2ef_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/90860/3c29c86d51b19e26834cf088a053e2ef_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/0/90860/7740566e685a4a9f6781fec97301c479_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "15.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "1,107",
                        "reviewTextSmall": "1,107 Reviews",
                        "subtext": "1,107 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "14.1K",
                        "reviewTextSmall": "14.1K Reviews",
                        "subtext": "14.1K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹150 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Nampally, Hyderabad",
                "address": "5-4-650/36/38, MJ Market, Nampally, Hyderabad",
                "localityUrl": "hyderabad/nampally-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/ice-cream/",
                    "name": "Ice Cream"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/famous-ice-creams-nampally/info",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"90860\",\"element_type\":\"listing\",\"rank\":59}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18674046,
            "name": "Mahamudra",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/18674046/4195692cbbc5b705b45aa8e25815930f_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/18674046/4195692cbbc5b705b45aa8e25815930f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.7",
                "rating_text": "4.7",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "186",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.7",
                        "reviewCount": "186",
                        "reviewTextSmall": "186 Reviews",
                        "subtext": "186 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹850 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Jubilee Hills, Hyderabad",
                "address": "Isha Life Yoga Studio LLP, Plot 522, Road 27, Jubilee Hills, Hyderabad",
                "localityUrl": "hyderabad/jubilee-hills-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/health-food/",
                    "name": "Healthy Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
                    "name": "Hyderabadi"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹850 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/mahamudra-jubilee-hills/info",
            "clickActionDeeplink": ""
        },
        "distance": "10.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18674046\",\"element_type\":\"listing\",\"rank\":60}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19662786,
            "name": "Kamadhenu Veg",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19662786/6eef8ed8370882ed9f1505c83b36d9c5_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/19662786/6eef8ed8370882ed9f1505c83b36d9c5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19662786/bcbc0e2b5329933d2168cbfc26dc1e66_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "20",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "20",
                        "reviewTextSmall": "20 Reviews",
                        "subtext": "20 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹950 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Gandipet, Hyderabad",
                "address": "Plot 62 & 38, Aziz Nagar, Cross Road, Gandipet, Hyderabad",
                "localityUrl": "hyderabad/gandipet-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹950 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/kamadhenu-veg-gandipet/info",
            "clickActionDeeplink": ""
        },
        "distance": "16.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19662786\",\"element_type\":\"listing\",\"rank\":61}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20374217,
            "name": "Snack Central",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/20374217/32685449510aca21ff5b255b6a4017d5_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/20374217/32685449510aca21ff5b255b6a4017d5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "1",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "S D Road, Secunderabad",
                "address": "Shop 6, LGF, Sumadhura's Pragati Chambers, Parklane, Circle 30, S D Road, Secunderabad",
                "localityUrl": "hyderabad/sd-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/snack-central-sd-road-secunderabad/info",
            "clickActionDeeplink": ""
        },
        "distance": "8.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20374217\",\"element_type\":\"listing\",\"rank\":62}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 97329,
            "name": "Hotel New Udupi Anand Bhavan",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/97329/285c751ea01f56696068e639cac4e92f_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/97329/285c751ea01f56696068e639cac4e92f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "235",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "235",
                        "reviewTextSmall": "235 Reviews",
                        "subtext": "235 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹150 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Charminar, Hyderabad",
                "address": "Door 22-6-159, Machli Kaman, Pathergatti, Charminar, Hyderabad",
                "localityUrl": "hyderabad/charminar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/hotel-new-udupi-anand-bhavan-charminar/info",
            "clickActionDeeplink": ""
        },
        "distance": "163 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"97329\",\"element_type\":\"listing\",\"rank\":63}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20187453,
            "name": "Chai Club",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20187453/06fd21064b7ae6fe2778e4fee8b55739_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/20187453/06fd21064b7ae6fe2778e4fee8b55739_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "1",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹100 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Saroor Nagar, Hyderabad",
                "address": "17-1-391/S/130, Singareni Colony, Saroor Nagar, Hyderabad",
                "localityUrl": "hyderabad/saroor-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/tea/",
                    "name": "Tea"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/coffee/",
                    "name": "Coffee"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/chai-club-saroor-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20187453\",\"element_type\":\"listing\",\"rank\":64}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [
            {
                "type": "chain_cta",
                "text": "View all outlets",
                "clickUrl": "/hyderabad/restaurants/chai-club?category=2"
            }
        ],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20489979,
            "name": "Swagath Mess",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/20489979/7630ee4981da9d391f9b00b88db27562_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/20489979/7630ee4981da9d391f9b00b88db27562_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "1",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Manikonda, Hyderabad",
                "address": "8-1-284/OU/303, O U Colony, Shaikpet, Manikonda, Hyderabad",
                "localityUrl": "hyderabad/manikonda-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/swagath-mess-manikonda/info",
            "clickActionDeeplink": ""
        },
        "distance": "10 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20489979\",\"element_type\":\"listing\",\"rank\":65}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20495821,
            "name": "Pure Bliss",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/20495821/31e63f776383e65c49d8068d8545dc40_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/20495821/31e63f776383e65c49d8068d8545dc40_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/1/20495821/bf457f137cb76306fa06bd7c001e4ab0_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "6",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "2",
                        "reviewTextSmall": "2 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "4",
                        "reviewTextSmall": "4 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Attapur, Hyderabad",
                "address": "4/3/149/1, Shop 4, Survey 515/P & 516/P, Somareddy Nagar, Pillar 123, Circle 11, Near SNR Convention, Attapur, Hyderabad",
                "localityUrl": "hyderabad/attapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/waffle/",
                    "name": "Waffle"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/pure-bliss-attapur/info",
            "clickActionDeeplink": ""
        },
        "distance": "4.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20495821\",\"element_type\":\"listing\",\"rank\":66}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20512416,
            "name": "Sri Vijaya Kanaka Durga Tiffins",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/20512416/035f84e0981350d4ebdc4a3a22f7f67d_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/20512416/035f84e0981350d4ebdc4a3a22f7f67d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/20512416/6d30c5b19167b7331e000968b33d3a27_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "1",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹150 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Moti Nagar, Hyderabad",
                "address": "8-4-369/342, Sanjay Nagar, Borabanda, Moti Nagar, Hyderabad",
                "localityUrl": "hyderabad/moti-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/sri-vijaya-kanaka-durga-tiffins-motinagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "11.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20512416\",\"element_type\":\"listing\",\"rank\":67}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20460551,
            "name": "Tea Adda",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/20460551/a4ef9c2e081e217fcd7d2fc3a00037c8_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/20460551/a4ef9c2e081e217fcd7d2fc3a00037c8_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "2",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹150 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "ECIL, Secunderabad",
                "address": "Plot 3, Sai Priya Colony, Dammiguda, ECIL, Secunderabad",
                "localityUrl": "hyderabad/ecil-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/tea/",
                    "name": "Tea"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/tea-adda-4-ecil-secunderabad/info",
            "clickActionDeeplink": ""
        },
        "distance": "19.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20460551\",\"element_type\":\"listing\",\"rank\":68}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20518725,
            "name": "Pstone - The Ice Cream House",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/5/20518725/00a3f4b18bfc4c71355d37ed317c8c8b_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/5/20518725/00a3f4b18bfc4c71355d37ed317c8c8b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/5/20518725/ccbac7085d24287b46b3e101f50c9f64_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "1",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Narapally, Hyderabad",
                "address": "Shop 10, Shiva Reddy Gudam, Ghatkesar, Near Royal Enfield Showroom, Narapally, Hyderabad",
                "localityUrl": "hyderabad/narapally-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/pstone-the-ice-cream-house-narapally/info",
            "clickActionDeeplink": ""
        },
        "distance": "23.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"ddeccfb1-c819-4b33-83f0-d2826f82baca\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20518725\",\"element_type\":\"listing\",\"rank\":69}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [
            {
                "type": "chain_cta",
                "text": "View all outlets",
                "clickUrl": "/hyderabad/restaurants/pstone-the-ice-cream-house?category=2"
            }
        ],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    }
]
]
const Veg = () => {
    const navigate=useNavigate();
   const backHome = () =>{
     navigate("/");
   }
   const navigateToOrder =()=>{
     navigate("/Order")
   }
   
   return (
       <div className='row m-5 pl-4'>
         <h3>
           <center>        
          Top VEG-Items <Button onClick={backHome} style={{float:'right',backgroundColor:"#2c9c7a",border:'none'}}>BACK</Button>
           </center>
           </h3>
   
         <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={one} />
         <Card.Body>
           <Card.Title>Gujarati thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={two} style={{height:'18rem'}} />
         <Card.Body>
           <Card.Title>vegpulao</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={three} />
         <Card.Body>
           <Card.Title>curd rice</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={five} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={six} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={seven} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={eight} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={nine} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={ten} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={eleven} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={thirteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={fourteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={fifteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={sixteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={seventeen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={eighteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={nineteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={three} />
         <Card.Body>
           <Card.Title>curd rice</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={five} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={six} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={seven} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={eight} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={nine} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={ten} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={eleven} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={thirteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={fourteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={fifteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={sixteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={seventeen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={eighteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button onClick={navigateToOrder} variant="danger">Order</Button>
         </Card.Body>
       </Card>
       <Card style={{ width: '20rem',margin:'15px' }}>
         <Card.Img variant="top" src={nineteen} style={{ height: '18rem'}} />
         <Card.Body>
           <Card.Title>Indian thali</Card.Title>
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
   
   
   

export default Veg
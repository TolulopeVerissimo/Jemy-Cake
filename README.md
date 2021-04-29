# Jemy Cake
This is an idea I've been thinking about for a long time. This web app is a teaser for the mobile version that was created to focus on my skills with Flask and React.JS.


The app scans a PSQL database for pantry items to aggregate recipe search data and optionally use mapping API to pathway for missing ingredients.


##### Login Modal
![login_modal](./docs/media/login.gif)

##### Cooking Promo Video
![cooking_promo](./docs/media/promo.gif)

##### Carousel Implementation
![carousel_imp](./docs/media/caro.gif)


Redux was used to handle user session state on the frontend while flask simply handles routing.
```
const SET_SESSION = 'session/SET_SESSION';
const REMOVE_SESSION = 'session/REMOVE_SESSION';
const setSession = (user) => {
    return {
        type: SET_SESSION,
        user,
    };
};

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const user = await response.json()
    dispatch(setSession(user));
    return user;
};
```

### Technical
It was recommended to stick to a BFS approach when sorting through pantry names, but then after more research and advisement from Stack OverFlow, I came to a point where I append the amount of names to an obj as a constant, with an O(n) outer loop. 

```
if (pantry) {
        for (let key in pantry) {
            if (pantry[key].userId == id) {
                pantryName.push(pantry[key].name)
                userPantries.push(pantry[key])
                pantryImages.push(pantry[key].image)

                if (pantryImages) {
                    // 'https://spoonacular.com/cdn/ingredients_500x500/beef-brisket.png,https://spoonacular.com/cdn/ingredients_500x500/sliced-carrot.png,https://spoonacular.com/cdn/ingredients_500x500/parsnip.jpg,https://spoonacular.com/cdn/ingredients_500x500/None,https://spoonacular.com/cdn/ingredients_500x500/garlic.png,https://spoonacular.com/cdn/ingredients_500x500/guinness.png,https://spoonacular.com/cdn/ingredients_500x500/beef-broth.png,https://spoonacular.com/cdn/ingredients_500x500/seasoning.png,https://spoonacular.com/cdn/ingredients_500x500/light-brown-sugar.jpg,https://spoonacular.com/cdn/ingredients_500x500/bay-leaves.jpg,https://spoonacular.com/cdn/ingredients_500x500/regular-mustard.jpg';
                    let str = pantryImages[0]
                    const regex = /,/g;
                    for (let i = 0; i < 10; i++) {
                        const seek = str.search(regex)
                        imgArr.push(str.slice(0, seek + 1))
                        str = str.slice(seek + 1)
                    }
                    for (let i = 0; i < 1; i++) {
                        imgArr[0] = imgArr[0].slice(1)

                    }
                    for (let i = 0; i < imgArr.length; i++) {
                        imgArr[i] = imgArr[i].slice(0, imgArr[i].length - 1)
                    }
                }
            }
        }
    }
```
### Features
* Add/ edit / delete / recipes and ingredients
* See missing ingredients for desired recipes
* Route from your location to your local grocery store for missing ingredients
* Follow friends and like their recipes

### Technologies Used
* React.js
* AWS S3
* Google Maps API 
* Spoonacular API and Pexel API
* PostgreSQL
* Heroku

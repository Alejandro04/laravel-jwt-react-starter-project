# react-laravel-with-jwt-authentication
Skeleton for reactjs and laravel with jwt-authentication.

# usage :
1. Rename .env.example to .env
2. Update DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD, and Social IDs in .env file to yours.
3. In command line : 
   - composer install
   - php artisan key:generate
   - php artisan migrate
4. yarn install
5. yarn run dev

# features:
This repository already configured with:
- Semantic UI React => https://react.semantic-ui.com/introduction
- Animate css => https://daneden.github.io/animate.css/
- Redux persist (For local storage) => https://www.npmjs.com/package/redux-persist
- Socialite => (https://laravel.com/docs/5.5/socialite)

# To-Do list :
- User registration => Done
- User login  => Done
- Forgot password => Done
- social login => Done (Facebook, Twitter, LinkedIn, Google)

let socialize = (function (venues, users) {

    let config = {

            venuesListComputed: {}

        },
        getUserWithNoFoodOption = (venue, users) => {

            return users.filter(user => !venue.food.filter(f => !user.wont_eat.includes(f)).length).map(user => user.name);

        },
        getUserWithNoDrinkOption = (venue, users) => {

            return users.filter(user => !user.drinks.some(drink => venue.drinks.includes(drink) )).map(user => user.name)

        },
        getAvailableVenues = () => {

            return config.venuesListComputed.filter(venue => !venue.userWithNoFoodOption && !venue.userWithNoDrinkOption);

        },
        getAvoidVenues = () => {

            return config.venuesListComputed.filter(venue => venue.userWithNoFoodOption || venue.userWithNoDrinkOption);

        },
        getVenuesListComputed = () => {

            return config.venuesListComputed;

        },
        init = () => {

            config.venuesListComputed = venues.map(venue => {

                let userWithNoFoodOption = getUserWithNoFoodOption(venue, users),
                    userWithNoDrinkOption = getUserWithNoDrinkOption(venue, users),
                    res = {'name': venue.name};

                    if (userWithNoFoodOption.length || userWithNoDrinkOption.length) {

                        res = Object.assign(res, {

                            'userWithNoFoodOption': userWithNoFoodOption,
                            'userWithNoDrinkOption': userWithNoDrinkOption

                        });

                    }

                return res;

            });

        };

        init();

    return {

        getAvailableVenues        : getAvailableVenues,
        getAvoidVenues            : getAvoidVenues,
        getVenuesListComputed     : getVenuesListComputed

    }

}(venuesList,usersList));

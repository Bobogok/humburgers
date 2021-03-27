function recipe_random() {
    var add_ingredients1 = [["болучка с кунжутом", "славянский хлеб", "сладкий хлеб", "французская булочка", "бородинский хлеб", "хлеб домашний","тост"],
                           ["куриная котлета", "рыбная котлета", "свиная котлета", "говяжья котлета", "сырое мясо", "шашлык","телятина","баранина"],
                           ["сыр", "кетчуп", "петрушка", "капуста", "майонез", "гречка","макароны","яичница"],
                           ["куриная котлета", "рыбная котлета", "свиная котлета", "говяжья котлета", "сырое мясо", "шашлык","телятина","баранина"],
                           ["болучка с кунжутом", "славянский хлеб", "сладкий хлеб", "французская булочка", "бородинский хлеб", "хлеб домашний","тост"]];

    var recipe_random = [];
    for (var i = 0; i < add_ingredients1.length ; i++) {
        var random = Math.floor(Math.random() * add_ingredients1[i].length);
        var a = add_ingredients1[i][random];
        recipe_random.push(a);
    }
    
    var recipe = [];
    for (var i = 0; i < 7; i++) {
        recipe.push(recipe_random[i]);
    }
    var add_recipe = document.getElementById("recipe1");
    add_recipe.innerHTML = recipe.join("<br>");

    var add_ingredients2 = [["болучка с кунжутом", "славянский хлеб", "сладкий хлеб", "французская булочка", "бородинский хлеб", "хлеб домашний","тост"],
                           ["куриная котлета", "рыбная котлета", "свиная котлета", "говяжья котлета", "сырое мясо", "шашлык","телятина","баранина"],
                           ["сыр", "кетчуп", "петрушка", "капуста", "майонез", "гречка","макароны","яичница"],
                           ["куриная котлета", "рыбная котлета", "свиная котлета", "говяжья котлета", "сырое мясо", "шашлык","телятина","баранина"],
                           ["болучка с кунжутом", "славянский хлеб", "сладкий хлеб", "французская булочка", "бородинский хлеб", "хлеб домашний","тост"]];

    var recipe_random = [];
    for (var i = 0; i < add_ingredients2.length ; i++) {
        var random = Math.floor(Math.random() * add_ingredients2[i].length);
        var a = add_ingredients2[i][random];
        recipe_random.push(a);
    }
    var recipe = [];
    for (var i = 0; i < 7; i++) {
        recipe.push(recipe_random[i]);
    }
    var add_recipe = document.getElementById("recipe2");
    add_recipe.innerHTML = recipe.join("<br>");

    var add_ingredients3 = [["болучка с кунжутом", "славянский хлеб", "сладкий хлеб", "французская булочка", "бородинский хлеб", "хлеб домашний","тост"],
                           ["куриная котлета", "рыбная котлета", "свиная котлета", "говяжья котлета", "сырое мясо", "шашлык","телятина","баранина"],
                           ["сыр", "кетчуп", "петрушка", "капуста", "майонез", "гречка","макароны","яичница"],
                           ["куриная котлета", "рыбная котлета", "свиная котлета", "говяжья котлета", "сырое мясо", "шашлык","телятина","баранина"],
                           ["болучка с кунжутом", "славянский хлеб", "сладкий хлеб", "французская булочка", "бородинский хлеб", "хлеб домашний","тост"]];

    var recipe_random = [];
    for (var i = 0; i < add_ingredients3.length ; i++) {
        var random = Math.floor(Math.random() * add_ingredients3[i].length);
        var a = add_ingredients3[i][random];
        recipe_random.push(a);
    }

    var recipe = [];
    for (var i = 0; i < 7; i++) {
        recipe.push(recipe_random[i]);
    }
    var add_recipe = document.getElementById("recipe3");
    add_recipe.innerHTML = recipe.join("<br>");
}
window.onload = recipe_random;
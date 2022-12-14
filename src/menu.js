function setActiveBtn() {
    const activeBtn = document.getElementById('active');
    if (activeBtn) activeBtn.removeAttribute('id');
    const menuBtn = document.querySelector('.menu-link');
    menuBtn.setAttribute('id', 'active');
}

function createMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('main-menu');
    menuPage.innerHTML = `
        <h2>Menu</h2>
        <div class="specials">
            <h3>ZT Specials</h3>
            <div class="item-1">
                <h4>Scaloppine alla Milanese<span class="price">28.50</span></h4>
                <p>Breaded veal escalope, arugula, parmesan, cherry tomato</p>
            </div>
            <div class="item-2">
                <h4>Pizza al Tartufo<span class="price">22.50</span></h4>
                <p>Truffle, mozzarella cheese, tomato</p>
            </div>
        </div>
        <div class="stuzzichini">
            <h3>Stuzzichini</h3>
            <div class="item-1">
                <h4>Bruschetta al pomodoro<span class="price">5.95</span></h4>
                <p>Bruschetta, tomatoes, garlic, basil, olive oil</p>
            </div>
            <div class="item-2">
                <h4>Arancini di riso al tartufo<span class="price">5.95</span></h4>
                <p>Rice, truffle cream, scamorza cheese</p>
            </div>
        </div>
        <div class="antipasti">
            <h3>Antipasti</h3>
            <div class="item-1">
                <h4>Calamari fritti<span class="price">9.95</span></h4>
                <p>Fried calamari with homemade garlic aioli</p>
            </div>
            <div class="item-2">
                <h4>Burrata<span class="price">15.95</span></h4>
                <p>Creamy burrata, basil, tomatoes</p>
            </div>
            <div class="item-3">
                <h4>Zuppa di verdure<span class="price">6.95</span></h4>
                <p>Homemade vegetable soup</p>
            </div>
        </div>
        <div class="paste">
            <h3>Paste e Risotti</h3>
            <div class="item-1">
                <h4>Spaghetti al pomodoro e basilico<span class="price">12.95</span></h4>
                <p>Homemade tomato sauce, basil</p>
            </div>
            <div class="item-2">
                <h4>Tagliatelle gamberi e zucchini<span class="price">18.50</span></h4>
                <p>Tagliatelle, prawns, cherry tomato, zucchini, garlic</p>
            </div>
            <div class="item-3">
                <h4>Risotto ai funghi porcini<span class="price">17.95</span></h4>
                <p>Risotto, porcini mushrooms, garlic, smoked scamorza</p>
            </div>
        </div>
        <div class="secondi">
            <h3>Secondi di Pesce e Carne</h3>
            <div class="item-1">
                <h4>Branzino alla griglia<span class="price">24.95</span></h4>
                <p>Fillet of seabass served with mixed vegetable caponata</p>
            </div>
            <div class="item-2">
                <h4>Filetto di manzo<span class="price">28.95</span></h4>
                <p>Fillet steak (8oz) grilled and served with chef's special sauce</p>
            </div>
            <div class="item-3">
                <h4>Petto di pollo alla Milanese<span class="price">19.95</span></h4>
                <p>Breaded breast of chicken served with tomato spaghetti</p>
            </div>
        </div>
        <div class="insalate">
            <h3>Insalate e Verdure</h3>
            <div class="item-1">
                <h4>Insalata al caprino<span class="price">14.95</span></h4>
                <p>Baby spinach, goat cheese, beetroot, pine nuts</p>
            </div>
            <div class="item-2">
                <h4>Caesar salad / con pollo<span class="price">14.95/17.95</span></h4>
                <p>Lettuce, anchovies, croutons, parmesan, caesar dressing / add chicken</p>
            </div>
            <div class="item-3">
                <h4>Insalata centocolori<span class="price">12.95</span></h4>
                <p>Mixed leaf salad, mozzarella, carrots, black olives, cherry tomatoes, fennel, radish</p>
            </div>
        </div>
        <div class="pizze">
            <h3>Pizze</h3>
            <div class="item-1">
                <h4>Napoli<span class="price">13.95</span></h4>
                <p>Anchovies, capers, mozzarella, tomato</p>
            </div>
            <div class="item-2">
                <h4>Prosciutto e funghi<span class="price">15.50</span></h4>
                <p>Ham, mushrooms, mozzarella, tomato</p>
            </div>
            <div class="item-3">
                <h4>Bresaola<span class="price">17.95</span></h4>
                <p>Cured beef, arugula, parmesan, mozzarella, tomato</p>
            </div>
        </div>
        <div class="contorni">
            <h3>Contorni</h3>
            <div class="item-1">
                <h4>Caponata<span class="price">5.95</span></h4>
                <p>Fried eggplant, peppers, onion, zucchini, tomato</p>
            </div>
            <div class="item-2">
                <h4>Patate arrosto<span class="price">4.95</span></h4>
                <p>Roasted potatoes</p>
            </div>
            <div class="item-3">
                <h4>Fagiolini verdi<span class="price">4.95</span></h4>
                <p>Green beans</p>
            </div>
        </div>
        <div class="dolci">
            <h3>Dolci Fatti in Casa</h3>
            <div class="item-1">
                <h4>Tiramisu<span class="price">7</span></h4>
                <p>Espresso, rich cream, mascarpone, savoiardi biscuits</p>
            </div>
            <div class="item-2">
                <h4>Coppa sicilia<span class="price">7</span></h4>
                <p>Mandarin, lemon, and strawberry sorbet with mixed fruit coulis</p>
            </div>
            <div class="item-3">
                <h4>Gelati e sorbetti (per scoop)<span class="price">5.50</span></h4>
                <p>Vanilla, chocolate, hazelnut, mandarin, lemon, strawberry</p>
            </div>
        </div>
        <div class="caffe">
            <h3>Caffe e Infusi</h3>
            <div class="item-1">
                <h4>Espresso<span class="price">3.75</span></h4>
            </div>
            <div class="item-2">
                <h4>Cappuccino<span class="price">3.95</span></h4>
            </div>
            <div class="item-3">
                <h4>Tea<span class="price">2.95</span></h4>
                <p>English breakfast, earl grey, peppermint, jasmine, fruit</p>
            </div>
        </div>
    `;
    return menuPage;
}

function loadMenu() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const menuPage = createMenuPage();
    setActiveBtn();
    main.appendChild(menuPage);
}

export default loadMenu;
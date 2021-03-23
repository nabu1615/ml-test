import "./style.scss";

const Categories = ({ categories }) => {

    const categoriesList = categories.map((category, index) => {
        return <li className="categories__item" key={index}>{category}</li>;
    });

    return (
        <ul className="categories">
            {categoriesList}
        </ul>
    )
}

export default Categories;
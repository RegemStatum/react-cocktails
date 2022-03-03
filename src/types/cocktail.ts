interface cocktailCard {
  name: string;
  isAlcoholic: boolean;
  ingredientsArr: Array<string>;
  image: string;
  cardClassName?: string;
  id: string;
}

export default cocktailCard;

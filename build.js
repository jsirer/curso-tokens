import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import ThemesLoader from 'sd-themes-loader';

register(StyleDictionary, {
  withSDBuiltins: false,
});

const loader = ThemesLoader(StyleDictionary);

async function run() {
  // ejemplo de algo que no se ejecuta.
  //const name = "Pablo";

  const juan = {
    name: "Juan",
    lastname: "Sirer",
    age: "37",
    isAmazing: "true",
    location: {
      city: "Groningen"
    }
  }
  console.log(juan.lastname);
  console.log(juan);
  console.log(location);
}


run();

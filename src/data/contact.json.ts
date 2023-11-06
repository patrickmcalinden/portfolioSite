export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:mcalindenpatrick226@gmail.com",
  type: "Email",
  title: "mcalindenpatrick226@gmail.com",
};
const two: Template = {
link: "https://www.linkedin.com/in/patrick-mcalinden/",
    type: "LinkedIn",
  title: "linkedin-patrick_mcAlinden",
};
const three: Template = {
link: "https://github.com/patrickmcalinden",
    type: "GitHub",
  title: "github-patrickmcalinden",
};
const four: Template = {
link: "https://public.tableau.com/app/profile/patrick.mcalinden/vizzes",
    type: "Tableau Public",
  title: "tableau-patrick.mcalinden",
};
export const bytype = {
  one,
    two,
    three,
    four
};
export const contact = Object.values(bytype);

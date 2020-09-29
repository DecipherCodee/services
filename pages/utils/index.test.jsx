import { shallow } from "enzyme";
import { useServicesStore } from ".";

const props = { Component: jest.fn(), pageProps: {} };

describe("app", () => {
  const { Component, pageProps } = props;
  const App = () => {
    const { useApp } = useServicesStore();
    return useApp({ Component, pageProps });
  };

  let app;

  beforeEach(() => {
    app = shallow(<App />).find("#app");
  });

  test("should render", () => {
    expect(app).toHaveLength(1);
  });

  it("renders Head", () => {
    const head = app.find("#head");
    expect(head).toHaveLength(1);
  });
  it("renders Header", () => {
    const header = app.find("#header");
    expect(header).toHaveLength(1);
  });
  it("renders Component", () => {
    const component = app.find("#component");
    expect(component).toHaveLength(1);
  });
  it("renders Footer", () => {
    const footer = app.find("#footer");
    expect(footer).toHaveLength(1);
  });
});

describe("services", () => {
  const Services = () => {
    const { useServices } = useServicesStore();
    return useServices();
  };

  let main;

  beforeEach(() => {
    main = shallow(<Services />).find("main");
  });

  test("should render", () => {
    expect(main).toHaveLength(1);
  });

  it("renders list", () => {
    const ul = main.find("ul");
    expect(ul).toHaveLength(1);
  });
});

import { render, cleanup, screen} from '@testing-library/react';
import { shallow, configure, mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import App from './App';
import Projects from './builtContracts/Projects.json'
import ReactDOM from 'react-dom';
import getWeb3Test from "./getWeb3Test"

configure({ adapter:new Adapter() });

describe("App", () => {
  afterEach(cleanup);
  it("renders without crashing", async () => {
    const div = document.createElement("div");
    ReactDOM.render(<App/>, div);
  })

  it("injects test web3 and displays homepage when connected", async () => {
    const web3 = await getWeb3Test();
    const accounts = await web3.eth.getAccounts();

    const mockWeb3State = {
      target: {
        name: "web3",
        value: web3
      }
    };
    const mockAccountsState = {
      target: {
        name: "accounts",
        value: accounts
      }
    };

    let wrapper = mount(<App />);
    wrapper.instance().handleChange(mockAccountsState);
    wrapper.instance().handleChange(mockWeb3State);

    // check we are on the right page by seeing ifit contains certain text
    expect(wrapper.text().includes("Connected to blockchain!")).toBe(true)
  })

  it("navigates between the different pages", async () => {
    const web3 = await getWeb3Test();
    const accounts = await web3.eth.getAccounts();
    const deployedNetwork = Projects.networks[5777];
    const instance = new web3.eth.Contract(
      Projects.abi,
      deployedNetwork && deployedNetwork.address,
    );

    const mockWeb3State = {
      target: {
        name: "web3",
        value: web3
      }
    };
    const mockAccountsState = {
      target: {
        name: "accounts",
        value: accounts
      }
    };

    const mockContractInstance = {
      target: {
        name: "contract",
        value: instance
      }
    };

    let wrapper = mount(<App />);

    // inject mock web3 and check if we are on the right page by looking for
    // text that page contains
    await wrapper.instance().handleChange(mockAccountsState);
    await wrapper.instance().handleChange(mockWeb3State);
    await wrapper.instance().handleChange(mockContractInstance);

    await wrapper.update()

    await expect(wrapper.exists('HomePage')).toBe(true)

    // simulate a user clicking the navbar to navagate to the create project page
    await wrapper.find('li').at(1).simulate('click')

    await wrapper.update()

    // check we are on the right page by seeing if corrrect component exists
    await expect(wrapper.exists('CreateProjectPageBody')).toBe(true)
    await expect(wrapper.exists('ViewProjectsPageBody')).toBe(false)
    await expect(wrapper.exists("AboutPage")).toBe(false)

    // simulate a user clicking a button to return to the homepage
    await wrapper.find('li').first().simulate('click')

    await wrapper.update()

    // check we are on the right page by seeing if it contains certain text
    await expect(wrapper.text().includes("Connected to blockchain!")).toBe(true)

    // simulate a user clicking a button to navagate to the view projects page
    await wrapper.find('li').at(2).simulate('click')

    // check we are on the right page by seeing if corrrect component exists
    await expect(wrapper.exists('CreateProjectPageBody')).toBe(false)
    await expect(wrapper.exists('ViewProjectsPageBody')).toBe(true)
    await expect(wrapper.exists("AboutPage")).toBe(false)

    // simulate a user clicking a button to navagate to the about page
    await wrapper.find('li').at(3).simulate('click')

    // check we are on the right page by seeing if corrrect component exists
    await expect(wrapper.exists('CreateProjectPageBody')).toBe(false)
    await expect(wrapper.exists('ViewProjectsPageBody')).toBe(false)
    await expect(wrapper.exists("AboutPage")).toBe(true)
  })
})

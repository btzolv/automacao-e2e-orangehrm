import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfopage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfopage

describe('Orange HRM Tests', () => {

it('User Info Update - Succes', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
  
    menuPage.accessMyInfo()
    
   myInfoPage.fillPersonalDetails(chance.first(), chance.last())
   myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'Drivers Number', '2025-05-04')
   myInfoPage.fillStatus()
   myInfoPage.saveForm()

  })

  
})
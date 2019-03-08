/**
 * This is the landing page for the app.
 */
import { Provider } from 'react-redux'
import SearchArea from '../components/SearchArea.js'
import store from '../redux/store.js'

const Index = () => (
    <Provider store={store}>
       <div>
        <SearchArea />
       </div>
    </Provider>
)

export default Index
import dva from "dva";
import "./index.css";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model 注册model
// app.model(require('./models/example').default);
app.model(require("./models/count").default);
app.model(require("./models/currentProfile").default);

// 4. Router 注册视图
app.router(require("./router").default);

// 5. Start
app.start("#root");

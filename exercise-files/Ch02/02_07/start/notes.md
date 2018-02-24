# 02_07

Now that we've installed Redux, we can use it to combine all of our reducers. 

initialStates.json is the state for our application. It is our single state object. It is the state that we would send to a single reducer. When we combine reducers, we need to make sure it is in the same shape as this object.

In this lesson, we combine all our reducers into a single reducer that can mutate our state object. In the next chapter, we will use Redux Store to handle our state mutations.
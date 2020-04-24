import superagent from "superagent"

// function for getting my blog posts from dev.to.
export const getPosts = async () => {
  // const DEV_TO_URL_PRIVATE = "https://dev.to/api/articles/me/published"
  // const API_KEY = process.env.DEV_TO_API_KEY

  const DEV_TO_URL = "https://dev.to/api/articles"

  try {
    const result = superagent
      .get(DEV_TO_URL)
      .query({ username: "ugglr" })
      .then(res => {
        return res.body
      })
    return result
  } catch (error) {
    console.log("WE HAVE FETCH POST ERROR", error)
  }
}

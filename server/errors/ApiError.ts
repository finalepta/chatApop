export default class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public errors = []
  ) {
    super(message);
  }
  static Unathorized() {
    return new ApiError(401, "Not authorized");
  }
}

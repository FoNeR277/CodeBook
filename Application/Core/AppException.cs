namespace Application.Core;

public class AppException
{
    public AppException(int statusCode, string messege, string details = null)
    {
        StatusCode = statusCode;
        Messege = messege;
        Details = details;
    }
    public int StatusCode { get; set; }
    public string Messege { get; set; }
    public string Details { get; set; }
}
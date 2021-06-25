function ktra()
{
    if(document.getElementById('pass').value=='')
    {
        alert("ban can phai nhap tu khoa can tim .");
        document.getElementById('pass').focus();
        return false
    }
    if(document.getElementById('giad').value=='')
    {
        alert("ban can chon gia .");
        document.getElementById('giad').focus();
        return false
    }
    if(document.getElementById('giac').value=='')
    {
        alert("ban can chon gia .");
        document.getElementById('giac').focus();
        return false
    }
    if(document.getElementById('giad').value>document.getElementById('giac').value)
    {
        alert('nhap sai thu tu gia can tim.')
        document.getElementById('giad').focus();
        document.getElementById('giac').focus();
    }
    return true;
}
function validate()
{
    if(ktra()==true)
    {
        alert('khong co o nao bi bo trong ');
    }
    if(validatenuber()==true)
            alert('gia tien dung');
}
function validatenuber()
{
    var a=document.getElementById('giad').value;
    var b=document.getElementById('giac').value;
    if(typeof(a)!=typeof(1))
    {
        alert('gia cua for sai , vui long nhap lai.');
        document.getElementById('giad').focus();
        return false;
    }
    if(typeof(b)!=typeof(1))
    {
        alert('gia cua to sai , vui long nhap lai.');
        document.getElementById('giac').focus();
        return false;
    }
    return true;
}
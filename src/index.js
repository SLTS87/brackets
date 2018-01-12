module.exports = function check(str, bracketsConfig) {
  // your solution
  'use strict'
  let array=[];
  let flag = true;
  let res = [];
  str = str.split('');
  if(str.length%2===1)
	  {
		  return false;
	  }
  for(let i = 0;i < str.length; i++)
  {
	   for(let j = 0;j < bracketsConfig.length;j++)
	   {	
			if(str[i] == bracketsConfig[j][0])
			{
				  array.push(str[i]);
				  break;
			} else if(str[i] == bracketsConfig[j][1])
			  {
				if(array.length>0)
				{
					if(array[array.length-1] == bracketsConfig[j][0])
					{
					  res.push(array.pop());
					  res.push(str[i]);
					  break;
					} else{
							for(var z = array.length;z > 0;z--)
							{
								if(array[z] == bracketsConfig[j][0])
								{
									if(array.slice(z+1).length % 2 !== 0)
										{
											return false;
										} else
											{
											  array = array.slice(0,z);
											}
											
								}
							}
						  }
				  } 
			  }
	  }
   
  }
  
   if(array.length > 0)
   {
	   for(let i = 0; i < array.length;i+=2)
	   {
			if(array[i] !== array[i+1])
				{
					return false;
				}
		} 
  }


  let match = [];
  let comparison = [];
	for(let i = 0; i < res.length;i+=2)
		{
			match.push(res[i] + res[i+1]);
		}
	for(let i = 0;i < match.length;i++)
	{
		for(let y = 0;y < bracketsConfig.length;y++)
			{
				if(match[i] === bracketsConfig[y].join(''))
					{
						comparison.push(1);
					}
			}
	}
	
  if(comparison.length === match.length)
	  {
		  return true;
	  } else
		{
		  return false;
		}
}

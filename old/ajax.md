---
title: ajax 的简单运用
Tag: ajax
data: 2016/7/29
---

iframe
<div class="bb-sk sk"><iframe frameborder="0" height="160" width="958" allowtransparency="true" scrolling="no" src="rlshqjc/rl.htm"></iframe></div>


和后台交互的时候经常会用到ajax,小白苦豪,臣妾做不到啊!实际是会则不难.
下面来说一下ajax的简单运用.

假如我们需要和后台进行交互的有name,password我们该如何操作呢


### html代码

``` bash
<div class="rese-cont">
			<form action="/yygh/yygh.php" onsubmit="return false;" method="post">
				<div class="rese-tab">
					<table>
						<tbody>
							<tr>
								<td>姓 名:</td>
								<td>
									<input type="text" name="name" id="name" value="" placeholder="请输入您的姓名">
								</td>

							</tr>
							<tr>
								<td>预约时间:</td>
								<td>
									<input type="date" name="order_date" id="order_date" value="">
								</td>

							</tr>
							<tr>
								<td>手机号码：</td>
								<td>
									<input type="text" name="tel" id="tel" value="" placeholder="请填写您的手机号码">
								</td>

							</tr>
							<tr>
								<td></td>
								<td>
									<textarea name="content" id="content" rows="2" cols="20" placeholder="备注..."></textarea>
								</td>

							</tr>
							<tr>

								<td colspan="2">
									<button onclick="addSys();" target="_self" class="star">提交预约&gt;&gt;</button>
								</td>

							</tr>
							<tr>
								<td colspan="2">
									<p onclick="openZoosUrl();return false;" target="_self" class="star1 zx0">在线咨询&gt;&gt;</p>
								</td>

							</tr>
						</tbody>
					</table>
				</div>

			</form>
		</div>
```

### .../yygh/yygh.php创建这个文件


``` bash
<?php
session_start();
if($_POST['imgcode'] == $_SESSION['checkNum']){
$conn = new MySQLi('localhost','root','212ddc8fe8','2014guahao');
$conn -> set_charset('utf8');
 
	$sql = "INSERT INTO `patient_16`(name,part_id,tel,order_date,disease_id,media_from,addtime) value('".trim($_POST['name'])."','2','".trim($_POST['tel'])."','".strtotime($_POST['order_date'])."','".trim($_POST['disease_id'])."','wangluoliuyan',".time().")";
	$result = $conn->query($sql);
	$rowy = $conn->affected_rows;

echo $rowy;
}else{
echo '0';
}
```


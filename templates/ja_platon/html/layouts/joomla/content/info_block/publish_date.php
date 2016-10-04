<?php
/**
 * ------------------------------------------------------------------------
 * JA Platon Template
 * ------------------------------------------------------------------------
 * Copyright (C) 2004-2011 J.O.O.M Solutions Co., Ltd. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * Author: J.O.O.M Solutions Co., Ltd
 * Websites:  http://www.joomlart.com -  http://www.joomlancers.com
 * This file may not be redistributed in whole or significant part.
 * ------------------------------------------------------------------------
 */

defined('JPATH_BASE') or die;
?>
			<dd class="published hasTooltip" title="<?php echo JText::sprintf('COM_CONTENT_PUBLISHED_DATE_ON', ''); ?>">
				<time datetime="<?php echo JHtml::_('date', $displayData['item']->publish_up, 'c'); ?>" itemprop="datePublished">
					<?php echo JHtml::_('date', $displayData['item']->publish_up, JText::_('DATE_FORMAT_LC3')); ?>
					<meta  itemprop="datePublished" content="<?php echo JHtml::_('date', $displayData['item']->publish_up, 'c'); ?>" />
          <meta  itemprop="dateModified" content="<?php echo JHtml::_('date', $displayData['item']->publish_up, 'c'); ?>" />
				</time>
			</dd>
